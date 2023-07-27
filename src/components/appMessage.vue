<script>
export default {
   name: 'appMessage',
   props: {
      message: Object
   },
   computed: {
      messageDate() {
         const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
         }
         const formatDate = new Date(this.message.date).toLocaleString('ru-RU', dateOptions).split(', ');

         return `${formatDate[1]}, ${formatDate[0]}`;
      }
   },
   methods: {
      coloringText() {
         let text = [...this.message.content];
   
         this.message.contentPostTones.forEach(elem => {
            const colorTone = (60 * elem.tone) + 60;
            const characters = text.splice(elem.position, elem.length);
            
            characters.forEach((item, i, arr) => {
               if (arr.length < 2) {
                  text.splice(elem.position, 0, `<span style="background: hsl(${colorTone}, 100%, 50%, 0.5);">${item}</span>`);
               } else if (i === 0) {
                  text.splice(elem.position, 0, `<span style="background: hsl(${colorTone}, 100%, 50%, 0.5);">${item}`);
               } else if (i === (elem.length - 1)) {
                  text.splice((elem.position + i), 0, `${item}</span>`);
               } else {
                  text.splice((elem.position + i), 0, item);
               }
            })
         });

         this.$refs['content'].innerHTML = text.join('');
      }
   },
   mounted() {
      this.coloringText();
   }
}
</script>

<template>
   <div class="message">
      <div class="message__data">
         <div class="message__data-item message__date">{{ messageDate }}</div>
         <div class="message__data-item message__author">{{ message.authorName }}</div>
         <a :href="message.authorUrl" class="message__data-item message__url" target="_blank">{{ message.authorUrl }}</a>
      </div>
      <div class="message__text">
         <p class="message__content" ref="content"></p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.message {
   display: flex;
   flex-direction: column;

   &__data {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0.8rem;

   }

   &__data-item {
      margin: 0.2rem 0.7rem 0 0;
      position: relative;

      &::after {
         content: '/';
         font-size: 1.1rem;
         font-weight: normal;
         color: #8a8d91;
         position: absolute;
         top: -0.1rem;
         right: -0.6rem;
      }

      &:last-child {
         margin-right: 0;

         &::after {
            display: none;
         }
      }
   }

   &__author {
      font-weight: 600;
      color: black;
   }

   &__url {
      text-decoration: none;
      color: #8a8d91;

      &:hover {
         color: brown;
         transition: 0.3s;
      }
   }
}
</style>