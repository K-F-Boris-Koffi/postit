<template>
  <header>
      <router-link to="/postitAdd">
        <button class="add_postit"></button>
      </router-link>
      <router-link to="/">
        <button class="home_link">HOME</button>
      </router-link>
    <h1>Welcome to Post-it 3.0</h1>
  </header>
  <router-view />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');


.home_link{
  font-size: 2rem;
  background-color: transparent;
  color: #ffffff;
  font-family: "Exo", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  text-shadow: 0 0 1rem #054cae;

}
.home_link:hover{
  border-bottom: 0.1rem solid #054cae;
}
.home_link::first-letter{
  font-size: 3.5rem;
}
header {
  position: relative;
  height: 80px;
  width: 100%;
  background-color: #020e27;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1rem 0.6rem #00000079;
  gap: 10rem;
}
header h1 {
  color: transparent;
  background: linear-gradient(90deg, #020024 0%, hwb(269 4% 53%) 0%, #054cae 0%, #00d4ff 64%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-background-clip: text;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
  width: fit-content;
}

button.add_postit {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 7rem;
  height: 7rem;
  background: url("../src/assets/package_post-it.svg");
  /* background: none; */
  /* border: 1px solid #000; */
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.quote-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.note {
  color: #333;
  position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  font-family: Satisfy;
  font-size: 30px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
}

textarea {
  width: 100%;
  background-color: transparent;
  border: none;
  resize: none;
  outline: none;
}

.yellow {
  background: #84ade4;
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  transform: rotate(2deg);
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
@media screen and (max-width: 1024px)
{
  header{
    gap: 2rem;
  }
  header h1{
    font-size: 2rem;
  }
}

@media screen and (max-width: 768px)
{
  header{
    padding: 4rem;
    padding-top: 6rem;
    gap: 1rem;
    flex-direction: column-reverse;
    /* align-items: end; */
  }
  header h1{
    font-size: 2rem;
    align-self: end;
  }
  button.add_postit{
    width: 4rem;
    height: 4rem;
  }
  .home_link{
    font-size: 1.5rem;
  }
  .home_link::first-letter{
    font-size: 2rem;
  }
}

@media screen and (max-width: 575px)
{
  header h1{
    font-size: 1.2rem;
  }
}

</style>

<script>
// import HomeView from "./views/HomeView.vue";
// import postitView from "./views/postitView.vue";

export default {
  name: "App",
  components: {
    // HomeView,
    // postitView,
  },
  props: ['note_id', 'text'],
  data() {
    return {
      name: "",
    };
  },
};
</script>
