<script setup lang="ts">

</script>

<template>
  <div class="right-side">
    <button class="btn-close-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
           stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x-circle"
           viewBox="0 0 24 24">
        <defs></defs>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M15 9l-6 6M9 9l6 6"></path>
      </svg>
    </button>
    <Chat/>
    <div class="participants">
      <div class="participant profile-picture">
        <img
            src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
            alt="pp">
      </div>
      <div class="participant profile-picture">
        <img
            src="https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="pp">
      </div>
      <div class="participant profile-picture">
        <img
            src="https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="pp">
      </div>
      <div class="participant profile-picture">
        <img
            src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80"
            alt="pp">
      </div>
      <div class="participant-more">2+</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-side {
  margin-left: auto;
  flex-basis: 400px;
  height: 100%;
  padding: 16px;
  position: relative;
  transition: all 300ms cubic-bezier(0.190, 1.000, 0.560, 1.000);

  &.show {
    display: block;
    transform: translateX(0);
  }
}
.participant-more {
  background-color: #e1e0e1;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #636181;
  font-weight: 700;
  border-radius: 8px;
  min-width: 32px;
}
</style>