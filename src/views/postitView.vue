<template>
  <div class="postitView">
    <h2>Post-it Détails</h2>
    <div id="postit_box">
      <i class="pin"></i>
      <blockquote class="note_page">
        <h1 class="title">{{ title }}</h1>
        <p>
          {{ content }}
        </p>
        <button @click="deletePostit(id)" class="delete"></button>
        <router-link :to="{ name: 'postitEdit', params: { id: id } } ">
          <button class="edit"></button>
        </router-link>
      </blockquote>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 2.5rem;
  /* border: 1px solid #bd0000; */
  height: 85%;
  overflow-y: scroll;
   /* Pour Firefox */
   scrollbar-width: thin;
  scrollbar-color: #054bae6e transparent;
  /* Pour Internet Explorer et Edge */
  scrollbar-face-color: #054bae6e;
  scrollbar-track-color: #f1f1f1;
  padding: 1rem;
}


/* Style scrollbar*/

  /* Pour Webkit */
  ::-webkit-scrollbar {
    width: 0.8rem;

  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #054cae;
    border-radius: 8px;
    transition: all 2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #054cae;
  }


.postitView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#postit_box {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60rem;
  height: 60rem;
}

.note_page {
  color: #333;
  position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Satisfy';
  font-size: 30px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}

.note_page button {
  position: absolute;
  top: 1rem;
  height: 4rem;
  width: 4rem;
  transition: all 0.3S;
}

.note_page button:hover
{
  transform: scale(1.15) rotate(15deg);
}

.note_page button.delete:hover
{
  transform: scale(1.2);
}
.note_page h1 {
  font-size: 4rem;
  text-align: center;
}

.note_page button.delete {
  right: 2rem;
  background: url('/src/assets/delete.svg') center no-repeat;
  background-size: cover;

}

.note_page button.edit {
  left: 2rem;
  background: url('/src/assets/pencil-svgrepo-com.svg') center no-repeat;
  background-size: cover;
}



h2 {
  position: relative;
  font-family: "Zen Dots", sans-serif;
  font-style: normal;
  font-size: 3rem;
  margin: 3rem;
  border-radius: 3rem;
  color: #020e27a1;

}



.note_page {
  background: #7ce9ff;

}

.pin {
  background-color: #28212c;
  display: block;
  height: 32px;
  width: 2px;
  position: absolute;
  left: 50%;
  top: -16px;
  z-index: 1;
}

.pin:after {
  background-color: #a31;
  background-image: radial-gradient(
    25% 25%,
    circle,
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 0%, 0.3)
  );
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.1),
    inset 3px 3px 3px hsla(0, 0%, 100%, 0.2), inset -3px -3px 3px hsla(0, 0%, 0%, 0.2),
    23px 20px 3px hsla(0, 0%, 0%, 0.15);
  content: "";
  height: 12px;
  left: -5px;
  position: absolute;
  top: -10px;
  width: 12px;
}

.pin:before {
  background-color: hsla(0, 0%, 0%, 0.1);
  box-shadow: 0 0 0.25em hsla(0, 0%, 0%, 0.1);
  content: "";

  height: 24px;
  width: 2px;
  left: 0;
  position: absolute;
  top: 8px;

  transform: rotate(57.5deg);
  -moz-transform: rotate(57.5deg);
  -webkit-transform: rotate(57.5deg);
  -o-transform: rotate(57.5deg);
  -ms-transform: rotate(57.5deg);

  transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
}
</style>

<script>
export default {
  name: "postitView",
  components: {},
  data() {
    return {
      title: "",
      content: "",
      id: this.$route.params.id,
    };
  },
  mounted() {
    const url = `http://62.72.5.95:1999/notes/${this.id}`;

    fetch(url).then((res) => {
      if (res.ok) {
        res.json().then((positData) => {
          console.log(positData.content[0]);
          this.title = positData.title;
          this.content = positData.content[0];
        });
      } else {
        console.log("ERREUR: Acunne donnée recu de l'API");
      }
    });
  },
  methods: {
    deletePostit() {
      fetch(`http://62.72.5.95:1999/notes/${this.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
      this.$router.push('/');
    },
  },
};
</script>
