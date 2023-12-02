from collections.abc import Iterable
import whisper
import contextlib
import io
import sys
import os

class OutputStream(io.StringIO):
    def __init__(self, collector):
        super().__init__()
        self.collector = collector

    def write(self, s):
        self.collector(s)
        super().write(s)

    def writelines(self, lines: Iterable[str]) -> None:
        for line in lines:
            self.write(line)


def collector(chunk):
    # print and sys.stdout.write both call .write internally hence I use os.write
    # to avoid infinite recursion
    os.write(1, chunk.encode())
    sys.stdout.flush()

def main(audio):
    model = whisper.load_model("base")
    audio = whisper.load_audio(audio)
     
    with contextlib.redirect_stdout(OutputStream(collector)):
        whisper.transcribe(model, audio, verbose=True)


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Transcribe audio file")
    parser.add_argument("audio", help="Audio file to transcribe")
    args = parser.parse_args()

    main(args.audio)