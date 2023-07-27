<script>
import appMessage from '@/components/appMessage.vue';
import { mapActions, mapState } from "vuex";

export default {
   name: 'appMessagesList',
   components: {
      appMessage
   },
   data() {
      return {
         preloader: false
      }
   },
   computed: {
      ...mapState({
         messages: state => state.messages,
         endFeed: state => state.endFeed
      })
   },
   methods: {
      ...mapActions(['fetchMessages']),
      onScroll(e) {
         if (this.endFeed) return;

         this.preloader = true;
         setTimeout(() => {
            if (e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight) {
               this.fetchMessages();
            }
            this.preloader = false;
         }, 1000);
      }
   },
   created() {
      this.fetchMessages();
   }
}
</script>

<template>
   <ul @scroll="onScroll" class="messages-list">
      <li 
         v-for="(item, index) in messages"
         :key="index"
         class="messages-list__item"
      >
         <appMessage :message="item"/>
      </li>
      <div v-show="preloader" class="preloader">
         <div class="preloader__spinner"></div>
      </div>
   </ul>
</template>

<style lang="scss" scoped>
.messages-list {
   padding-top: 2rem;
   height: 99vh;
   overflow: auto;

   &__item {
      padding: 1rem 0;
      border-bottom: 1px solid #ccc;
      &:last-child {
         border-bottom: none;
      }
   }
}

.preloader {
   width: 100%;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 20;
}

.preloader__spinner {
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100px;

   &:after {
      content: "⠋";
      display: block;
      font-size: 30px;
      color: brown;
      animation: changeContent .8s linear infinite;
   }
}

@keyframes changeContent {
   10% { content: "⠙"; }
   20% { content: "⠹"; }
   30% { content: "⠸"; }
   40% { content: "⠼"; }
   50% { content: "⠴"; }
   60% { content: "⠦"; }
   70% { content: "⠧"; }
   80% { content: "⠇"; }
   90% { content: "⠏"; }
}
</style>