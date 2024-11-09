<template>
  <ul id="grid-container">
    <router-link :to="{ name: 'postitView', params: { id: item._id } } " v-for="item in notes" :key="item._id">
      <li  class="grid-items">
        <div class="quote-container">
          <i class="pin"></i>
          <blockquote class="note yellow">
            <h1 class="title">{{ item.title }}</h1>
            <p>
              {{ item.content[0] }}
            </p>
          </blockquote>
        </div>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      notes: [],
    };
  },
  mounted() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes() {
      fetch(`http://62.72.5.95:1999/Notes`)
        .then((res) => res.json())
        .then((data) => {
          this.notes = data.notes;
          setTimeout(this.fetchNotes, 500);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des notes:", error);
          setTimeout(this.fetchNotes, 500);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Satisfy");

ul {
  display: flex;
  padding: 5rem;
  flex-direction: row;
  height: fit-content;
  width: 100%;
}

#grid-container {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  justify-content: center;
  grid-gap: 4rem;
}

.grid-items {
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
}

.grid-items:hover .note
{
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  transform: scale(1.2);
}

.grid-items:hover .pin
{
  top: -8%;
  height: 1rem;
}

.grid-items:hover .pin::before
{
  background-color: transparent;
  box-shadow: initial;
}

.grid-items:hover .pin::after
{
  box-shadow: initial;
  box-shadow: 0 1.2rem 0.3rem 0.3rem #0000004f;
}

.quote-container {
  position: relative;
  height: 100%;
}

.note {
  color: #333;
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Satisfy;
  font-size: 30px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;

    background: #7ce9ff;
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  transform: rotate(2deg);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
}
h1 {
  width: 100%;
  text-align: center;
  font-size: 3rem;
  color: #050b13;
  height: 15%;
  font-size: 2.2rem;
}

p {
  width: 100%;
  height: 60%;
  overflow: hidden;
  background-color: transparent;
  font-size: 1.8rem;
  border: none;
  resize: none;
  outline: none;
}


.pin {
  background-color: #2c2221;
  display: block;
  height: 3.2rem;
  width: 2px;
  position: absolute;
  left: 50%;
  top: -10%;
  z-index: 1;
  transition: all  0.3s;
}

.pin:after {
  background-color: #a31;
  background-image: radial-gradient(
    25% 25%,
    circle,
    hsla(0, 0%, 100%, 0.3),
    hsl(0, 0%, 0%)
  );
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px hsla(239, 100%, 50%, 0.1),
    inset 3px 3px 3px hsla(0, 0%, 100%, 0.2), inset -3px -3px 3px hsla(0, 0%, 0%, 0.2),
    23px 20px 3px hsla(0, 0%, 0%, 0.15);
  content: "";
  height: 12px;
  left: -5px;
  position: absolute;
  top: -10px; 
  width: 12px;
  transition: all 0.3s;
}

.pin:before {
  background-color: hsla(0, 100%, 50%, 0.1);
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
