/* 
    Created on : 31/01/2019, 11:10:00 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content" class="activo"></div>
      <div v-html="post.publishedAt" class="autor"></div>
    </div>
  `
});

var vue = new Vue({
    el: '#blog-post-demo',
    data: {
        styleObject: {
            color: 'blue',
            fontSize: '12px',
            
        },
        basico: {
            color: 'black',
            fontSize: '14px',
            background: '#FFFF01',
            display: 'block',
        },
        overridingStyles: {
            fontFamily: 'Arial, sans-serif, Helvetica',
            fontStyle: 'italic',
        },
        posts: [
          { id: 1, title: 'Prueba de componentes',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 1'
          },
          { id: 2, title: 'Blogging con Vue',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 2'
          },
          { id: 3, title: 'Porque es util un componente',
            content: 'Esta es una prueba del contenido de un post.', 
            publishedAt: 'Reportero 3'
          }
        ]
    }
});
