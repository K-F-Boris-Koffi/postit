<template>
  <div class="postitAdd">
    <h2>Ajouter un Post-it</h2>
    <form action="">
      <input type="text" placeholder="Entrez un titre" v-model="title" />
      <textarea placeholder="Entrez une nouvelle note" v-model="content"></textarea>
      <button @click="add_postit()"></button>
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Zen+Dots&display=swap');



.postitAdd {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  position: relative;
  height: 65rem;
  width: 65em;
  display: flex;
  flex-direction: column;
  gap: 5%;
  background-color: #7ce9ff;
  padding: 2rem;
  box-shadow: -2rem 2rem 2rem #0000002a, 0rem 2rem 2rem #0000002a inset;
}

form input {
  width: 100%;
  height: 15%;
  background-color: transparent;
  font-size: 3rem;
  border-radius: 1rem;
  padding: 0 2rem;
  font-family: 'Satisfy';
  font-size: 5rem;
}



form input:hover, form textarea:hover{
  border: 3px dashed #695e5e2c;
}

form input:focus, form textarea:focus{
  border: 3px solid #051d222c;
}

form input::placeholder,
form textarea::placeholder {
  color: #1f5a64;
  font-family: "Kalam", cursive;
  font-weight: 300;
  font-style: normal;
  font-size: 5rem;
}

form textarea {
  width: 100%;
  height: 80%;
  resize: none;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 2.5rem;
  border-radius: 1rem;
  padding: 0 2rem;
  font-family: 'Satisfy';
  height: 85%;
  overflow-y: scroll;
   /* Pour Firefox */
  scrollbar-color: #054bae6e transparent;
  /* Pour Internet Explorer et Edge */
  scrollbar-face-color: #054bae6e;
  scrollbar-track-color: #f1f1f1;
  padding: 1rem;
  font-family: 'Satisfy';

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

form button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -2rem;
  right: -2rem;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border: 1px solid #0f4ebb;
  box-shadow: 0 0 1rem 0.6rem #0000005d;
  background: linear-gradient(90deg, #020024 0%, hwb(269 4% 53%) 0%, #054cae 0%, #00d4ff 64%);

  background-size: cover;
  color: #1f5a64;
  font-weight: bold;

}

form button::after
{
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url('/src/assets/icon_add.svg') center no-repeat;
}

h2 {
  font-family: "Zen Dots", sans-serif;
  font-style: normal;
  font-size: 3rem;
  margin: 3rem;
  border-radius: 3rem;
  color: #020e27a1;

}

</style>

<script>
export default {
  name: "postitAdd",
  components: {},
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    add_postit() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, content: [this.content] }),
      };

      fetch("http://62.72.5.95:1999/notes", requestOptions).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            this.postId = data.id;
            this.$router.push('/');
          });
        } else {
          console.log("ERREUR: Impossible d'ajouer une note");
        }
      });
    },
  },
};
</script>
