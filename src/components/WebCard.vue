<template>
  <div class="container">
    <!-- 버튼 서랍 -->
    
    <!-- 날짜 일력창 -->
    <div class="dateinput" v-if="modal">
      <input type="datetime-local" v-model="datetime">
      <button>추가</button><!--@click="addsche(place.id)"-->
    </div>
    <!-- 카드 앞면 -->
    <div class="front card">
      <div class="button-bar">
        <button @click="addLike"><font-awesome-icon icon="fa-regular fa-heart" :class="{'likedplace': check}"/></button>
        <button><font-awesome-icon icon="fa-regular fa-map" /></button><!--@click="map"-->
        <button><font-awesome-icon icon="fa-regular fa-calendar" /></button><!--@click="modal=!modal"-->
      </div>
      <!-- <img :src="`./assets/place/${place.image}`" alt=""> -->
      <ul>
        <li>{{ place.name }}</li>
        <li>{{ place.address }}</li>
      </ul>
    </div>
    <!-- 카드 뒷면 -->
    <div class="back card">
      <div class="button-bar">
        <button @click="addLike"><font-awesome-icon icon="fa-regular fa-heart" :class="{'likedplace': check}"/></button><!--@click="like"-->
        <button><font-awesome-icon icon="fa-regular fa-map" /></button><!--@click="map"-->
        <button><font-awesome-icon icon="fa-regular fa-calendar" /></button><!--@click="modal=!modal"-->
      </div>
      <ul>
        <li>{{ place.signature }}</li>
        <li>{{ place.telephone }}</li>
        <li>{{ place.time }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // props로 장소 객체만 전달받으면 알아서 출력
    place: Object
  },
  data() {
    return ({
      datetime: "",
      modal: false
    })
  },
  methods: {
    addLike: function() {
      // Liked에 없다면 장소의 아이디를 유저의 데이터에 추가
      if(!this.$store.getters.getLiked.some((el) => this.place.id==el.id)) {
        this.$store.commit('addLikePlace', {id: this.place.id, name: this.place.name});
      }
      // Liked에 있다면 삭제
      else {
        this.$store.commit('deleteLikePlace', this.place.id);
      }
    },
    /*map: function() {
      // maps 라우터를 따로 지정 후 params.id 값으로 장소의 도로명 주소를 넘겨주면 서버에서 변환 후 그 지점을 센터로 하는 지도 페이지로 push
      this.$router.push(`/maps/${this.place.address}`);
    },
    addsche: function(id) {
      // 전송버튼을 누르면 날짜와 장소의 이름을 객체로 만들어서 유저의 데이터에 추가
      const nDate={
        id: id,
        datetime: this.datetime
      };
      this.$store.state.userdate.push(nDate);
    }*/
  },
  computed: {
    check() {
      if(this.$store.getters.getLiked.some((item) => item.id==this.place.id)) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
</script>

<style scoped>
.container {
    width: 30%;
    height: 300px;
    perspective: 100rem;
    margin: 10px;
}

.card {
    width: 300px;
    height: 300px;
    /* 뒷면 가시성 */
    backface-visibility: hidden;
    transition: 1s;
}

.front {
    position: absolute;
    background-color: yellowgreen;
    /* deg => 각의 단위 degree, 원 한바퀴를 360도로 표현하는 방법 */
    transform: rotateY(0deg);
}

.back {
    position: absolute;
    background-color: palevioletred;
    transform: rotateY(-180deg);
}

.container:hover .front {    
    transform: rotateY(180deg);
}

.container:hover .back {    
    transform: rotateY(0deg);
}

ul {
  list-style-type: none;
}

button {
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px 7px;
}

button:hover {
  cursor: pointer;
}

.button-bar {
  float: right;
}

.likedplace {
  color: red;
}
</style>