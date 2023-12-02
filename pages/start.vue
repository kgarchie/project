<template>
    <Title>Start</Title>
    <div class="container">
        <header>
            <div class="flex">
                <div class="user">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19.5761 14.5764L15.7067 10.707C15.3162 10.3164 14.683 10.3164 14.2925 10.707L6.86484 18.1346C5.11358 16.6671 4 14.4636 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9014 19.8509 13.7679 19.5761 14.5764ZM8.58927 19.2386L14.9996 12.8283L18.6379 16.4666C17.1992 18.6003 14.7613 19.9998 11.9996 19.9998C10.7785 19.9998 9.62345 19.7268 8.58927 19.2386ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z">
                        </path>
                    </svg>
                    <div class="name">Welcome, Username</div>
                </div>
                <div class="actions">
                    <div class="notifications">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="new">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z">
                                </path>
                            </svg>
                            <NuxtLink to="/meeting" style="text-decoration: none; color: inherit;">New Meeting</NuxtLink>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <section class="light">
            <h1>History</h1>
            <div class="flex history">
                <div class="card">
                    <span class="icon">
                        <img src="/user-fill.svg" alt="">
                    </span>
                    <h4>Topic</h4>
                    <p>
                        Description chunk of Lorem Ipsum used since the 1500s is showed below
                        for those interested.
                    </p>
                    <div class="shine"></div>
                    <div class="background">
                        <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>

                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>

                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                            

                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div>
                </div>
                <div class="card">
                    <span class="icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                            <path
                                d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                            <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                            <path
                                d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
                        </svg>
                    </span>
                    <h4>Categories</h4>
                    <p>
                        Standard chunk of Lorem Ipsum used since the 1500s is showed below
                        for those interested.
                    </p>
                    <div class="shine"></div>
                    <div class="background">
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>

                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>

                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>

                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div>
                </div>
            </div>
            <h1>Upcoming</h1>
            <div class="flex upcoming">
                <div class="card">
                    <span class="icon">
                        <img src="/user-fill.svg" alt="">
                    </span>
                    <h4>Products</h4>
                    <p>
                        Standard chunk of Lorem Ipsum used since the 1500s is showed below
                        for those interested.
                    </p>
                    <div class="shine"></div>
                    <div class="background">
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>

                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>

                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>

                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div>
                </div>
                <div class="card">
                    <span class="icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                            <path
                                d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                            <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                            <path
                                d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
                        </svg>
                    </span>
                    <h4>Categories</h4>
                    <p>
                        Standard chunk of Lorem Ipsum used since the 1500s is showed below
                        for those interested.
                    </p>
                    <div class="shine"></div>
                    <div class="background">
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>

                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>

                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>

                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss">
.container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
    isolation: isolate;
    position: relative;


    header {
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        margin-top: 5.5rem;
        border-radius: 10px;
        padding: 2rem;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        background-color: rgba(76, 49, 78, 0.5);


        .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            color: white;

            .user {
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                .name {
                    font-size: 20px;
                    font-weight: 500;
                }
            }
        }

        .actions {
            display: flex;
            justify-content: center;
            align-items: center;

            .new {
                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #10B981;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 20px;
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        background-color: #059669;
                    }

                    svg {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }
            }

            .notifications {
                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: transparent;
                    border: none;
                    border-radius: 5px;
                    padding: 10px;
                    fill: #2e2e34;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        fill: #059669;
                    }

                    svg {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }

    .light {
        z-index: 1;
        --background-color: #f5f5f5;
        --text-color: #52525B;

        --card-background-color: transparent;
        --card-border-color: rgba(24, 24, 27, 0.08);
        --card-box-shadow-1: rgba(24, 24, 27, 0.02);
        --card-box-shadow-1-y: 3px;
        --card-box-shadow-1-blur: 6px;
        --card-box-shadow-2: rgba(24, 24, 27, 0.04);
        --card-box-shadow-2-y: 2px;
        --card-box-shadow-2-blur: 7px;
        --card-label-color: #18181B;
        --card-icon-color: #18181B;
        --card-icon-background-color: rgba(24, 24, 27, 0.04);
        --card-icon-border-color: rgba(24, 24, 27, 0.1);
        --card-shine-opacity: .3;
        --card-shine-gradient: conic-gradient(from 225deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, #EDFAF6 285deg, #FFFFFF 345deg, rgba(16, 185, 129, 0) 360deg);
        --card-line-color: #E9E9E7;
        --card-tile-color: rgba(16, 185, 129, 0.08);

        --card-hover-border-color: rgba(24, 24, 27, 0.15);
        --card-hover-box-shadow-1: rgba(24, 24, 27, 0.05);
        --card-hover-box-shadow-1-y: 3px;
        --card-hover-box-shadow-1-blur: 6px;
        --card-hover-box-shadow-2: rgba(24, 24, 27, 0.1);
        --card-hover-box-shadow-2-y: 8px;
        --card-hover-box-shadow-2-blur: 15px;
        --card-hover-icon-color: #18181B;
        --card-hover-icon-background-color: rgba(24, 24, 27, 0.04);
        --card-hover-icon-border-color: rgba(24, 24, 27, 0.34);

        --blur-opacity: .1;

        grid-gap: 1rem;
        margin: auto;
        font-family: 'Inter', Arial;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 0.5rem;

        .flex {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            gap: 1rem;
            position: relative;
            z-index: 1;
            padding: 2rem 0;
        }

        h1{
            margin-bottom: 5px;
        }

        .history {
            margin-bottom: 2rem;
            background-color: var(--background-color);
        }

        .upcoming {
            background-color: var(--background-color);
        }


        .card {
            width: 300px;
            max-width: 40vw;
            background-color: var(--background-color);
            box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1), 0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
            padding: 16px 16px 16px 16px;
            border-radius: 15px;
            cursor: pointer;
            position: relative;
            transition: box-shadow .25s;

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 15px;
                background-color: var(--card-background-color);
            }

            .icon {
                z-index: 2;
                position: relative;
                display: table;
                padding: 8px;

                &::after {
                    content: '';
                    position: absolute;
                    inset: 4.5px;
                    border-radius: 50%;
                    background-color: var(--card-icon-background-color);
                    border: 1px solid var(--card-icon-border-color);
                    backdrop-filter: blur(2px);
                    transition: background-color .25s, border-color .25s;
                }

                img {
                    position: relative;
                    z-index: 1;
                    display: block;
                    width: 24px;
                    height: 24px;
                    transform: translateZ(0);
                    color: var(--card-icon-color);
                    transition: color .25s;
                }
            }

            h4 {
                z-index: 2;
                position: relative;
                margin: 12px 0 4px 0;
                font-family: inherit;
                font-weight: 600;
                font-size: 14px;
                line-height: 2;
                color: var(--card-label-color);
            }

            p {
                z-index: 2;
                position: relative;
                margin: 0;
                font-size: 14px;
                line-height: 1.7;
                color: var(--text-color);
            }

            .shine {
                border-radius: inherit;
                position: absolute;
                inset: 0;
                z-index: 1;
                overflow: hidden;
                opacity: 0;
                transition: opacity .5s;

                &:before {
                    content: '';
                    width: 150%;
                    padding-bottom: 150%;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    bottom: 55%;
                    filter: blur(35px);
                    opacity: var(--card-shine-opacity);
                    transform: translateX(-50%);
                    background-image: var(--card-shine-gradient);
                }
            }

            .background {
                border-radius: inherit;
                position: absolute;
                
                inset: 0;
                overflow: hidden;
                -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
                mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);

                .tiles {
                    opacity: 0;
                    transition: opacity .25s;

                    .tile {
                        position: absolute;
                        background-color: var(--card-tile-color);
                        animation-duration: 8s;
                        animation-iteration-count: infinite;
                        opacity: 0;

                        &.tile-4,
                        &.tile-6,
                        &.tile-10 {
                            animation-delay: -2s;
                        }

                        &.tile-3,
                        &.tile-5,
                        &.tile-8 {
                            animation-delay: -4s;
                        }

                        &.tile-2,
                        &.tile-9 {
                            animation-delay: -6s;
                        }

                        &.tile-1 {
                            top: 0;
                            left: 0;
                            height: 10%;
                            width: 22.5%;
                        }

                        &.tile-2 {
                            top: 0;
                            left: 22.5%;
                            height: 10%;
                            width: 27.5%;
                        }

                        &.tile-3 {
                            top: 0;
                            left: 50%;
                            height: 10%;
                            width: 27.5%;
                        }

                        &.tile-4 {
                            top: 0;
                            left: 77.5%;
                            height: 10%;
                            width: 22.5%;
                        }

                        &.tile-5 {
                            top: 10%;
                            left: 0;
                            height: 22.5%;
                            width: 22.5%;
                        }

                        &.tile-6 {
                            top: 10%;
                            left: 22.5%;
                            height: 22.5%;
                            width: 27.5%;
                        }

                        &.tile-7 {
                            top: 10%;
                            left: 50%;
                            height: 22.5%;
                            width: 27.5%;
                        }

                        &.tile-8 {
                            top: 10%;
                            left: 77.5%;
                            height: 22.5%;
                            width: 22.5%;
                        }

                        &.tile-9 {
                            top: 32.5%;
                            left: 50%;
                            height: 22.5%;
                            width: 27.5%;
                        }

                        &.tile-10 {
                            top: 32.5%;
                            left: 77.5%;
                            height: 22.5%;
                            width: 22.5%;
                        }
                    }
                }

                @keyframes tile {

                    0%,
                    12.5%,
                    100% {
                        opacity: 1;
                    }

                    25%,
                    82.5% {
                        opacity: 0;
                    }
                }

                .line {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity .35s;

                    &:before,
                    &:after {
                        content: '';
                        position: absolute;
                        background-color: var(--card-line-color);
                        transition: transform .35s;
                    }

                    &:before {
                        left: 0;
                        right: 0;
                        height: 1px;
                        transform-origin: 0 50%;
                        transform: scaleX(0);
                    }

                    &:after {
                        top: 0;
                        bottom: 0;
                        width: 1px;
                        transform-origin: 50% 0;
                        transform: scaleY(0);
                    }

                    &.line-1 {
                        &:before {
                            top: 10%;
                        }

                        &:after {
                            left: 22.5%;
                        }

                        &:before,
                        &:after {
                            transition-delay: .3s;
                        }
                    }

                    &.line-2 {
                        &:before {
                            top: 32.5%;
                        }

                        &:after {
                            left: 50%;
                        }

                        &:before,
                        &:after {
                            transition-delay: .15s;
                        }
                    }

                    &.line-3 {
                        &:before {
                            top: 55%;
                        }

                        &:after {
                            right: 22.5%;
                        }
                    }
                }
            }

            &:hover {
                box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1), 0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2), 0 0 0 1px var(--card-hover-border-color);

                .icon {
                    &::after {
                        background-color: var(--card-hover-icon-background-color);
                        border-color: var(--card-hover-icon-border-color);
                    }

                    svg {
                        color: var(--card-hover-icon-color);
                    }
                }

                .shine {
                    opacity: 1;
                    transition-duration: .5s;
                    transition-delay: 0s;
                }

                .background {

                    .tiles {
                        opacity: 1;
                        transition-delay: .25s;

                        .tile {
                            animation-name: tile;
                        }
                    }

                    .line {
                        opacity: 1;
                        transition-duration: .15s;

                        &:before {
                            transform: scaleX(1);
                        }

                        &:after {
                            transform: scaleY(1);
                        }

                        &.line-1 {

                            &:before,
                            &:after {
                                transition-delay: .0s;
                            }
                        }

                        &.line-2 {

                            &:before,
                            &:after {
                                transition-delay: .15s;
                            }
                        }

                        &.line-3 {

                            &:before,
                            &:after {
                                transition-delay: .3s;
                            }
                        }
                    }
                }
            }
        }

        .day-night {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
            opacity: .3;

            input {
                display: none;

                &+div {
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    position: relative;
                    box-shadow: inset 8px -8px 0 0 var(--text-color);
                    transform: scale(1) rotate(-2deg);
                    transition: box-shadow .5s ease 0s, transform .4s ease .1s;

                    &:before {
                        content: '';
                        width: inherit;
                        height: inherit;
                        border-radius: inherit;
                        position: absolute;
                        left: 0;
                        top: 0;
                        transition: background-color .3s ease;
                    }

                    &:after {
                        content: '';
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        margin: -3px 0 0 -3px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        box-shadow: 0 -23px 0 var(--text-color), 0 23px 0 var(--text-color), 23px 0 0 var(--text-color), -23px 0 0 var(--text-color), 15px 15px 0 var(--text-color), -15px 15px 0 var(--text-color), 15px -15px 0 var(--text-color), -15px -15px 0 var(--text-color);
                        transform: scale(0);
                        transition: all .3s ease;
                    }
                }

                &:checked+div {
                    box-shadow: inset 20px -20px 0 0 var(--text-color);
                    transform: scale(.5) rotate(0deg);
                    transition: transform .3s ease .1s, box-shadow .2s ease 0s;

                    &:before {
                        background: var(--text-color);
                        transition: background-color .3s ease .1s;
                    }

                    &:after {
                        transform: scale(1);
                        transition: transform .5s ease .15s;
                    }
                }
            }
        }
    }
}
</style>