</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AgGridVueDemo from './components/AgGridVueDemo.vue';
import data from './data';

@Component({
  components: {
    AgGridVueDemo
  }
})

export default class App extends Vue {

  private dataItems = data;

  get dataHeaders() {
    console.log(this.dataItems);
    return [
      {
        text: 'ID', 
        value: 'ID', 
      },
      {
        text: 'Class', 
        value: 'Class', 
      },
      {
        text: 'Name', 
        value: 'Name', 
      }
    ];
  }

}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>