<script>
  import phrases from '../../assets/data/french.json'
  import Keyboard from '../Keyboard'

  export default {
    name: 'french',
    data () {
      return {
        thisPhrases: [],
        numPhrase: 0
      }
    },
    created () {
      for (let i in phrases) {
        this.thisPhrases.push(phrases[i])
      }
    },
    methods: {
      isOk () {
        this.$emit('char', document.getElementById('i-0').value)
        let phrase = document.getElementById(`p-${this.thisPhrases[0][this.numPhrase].id}`).textContent
        let answer = document.getElementById(`i-${this.thisPhrases[0][this.numPhrase].id}`).value
        if (phrase === answer) {
          if (this.numPhrase < this.thisPhrases[0].length) {
            document.getElementById(`i-${this.thisPhrases[0][this.numPhrase].id}`).value = ''

            this.numPhrase + 1 < this.thisPhrases[0].length ? this.numPhrase++ : this.numPhrase = this.numPhrase
          }
        }
      },
      isCancel () {
        document.getElementById(`i-${this.thisPhrases[0][this.numPhrase].id}`).value = ''
      }
    },
    components: {Keyboard}
  }
</script>

<template>
  <div class="frenchView">
    <h1>Français</h1>
    <div class="phrase">
      <p :id='"p-" + this.thisPhrases[0][this.numPhrase].id'>{{this.thisPhrases[0][this.numPhrase].text}}</p>
      <input type='text' :id='"i-" + this.thisPhrases[0][this.numPhrase].id'/>
      <div class="command">
        <button class='cancel' @click='isCancel'>Je recommence</button>
        <button class='validate' @click='isOk'>Je continue</button>
      </div>
    </div>

    <Keyboard></Keyboard>
  </div>  
</template>

<style>
  .phrase{
    border-radius:10px;
    background-color: #ecf0f1;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
  }

  .phrase p{
    font-weight: bold;
  }

  .phrase input{
    border: none;
    border-bottom: 2px solid #9b59b6;
    border-radius: 4px;
    padding: 8px;
    width: 80%;
    font-weight: bold;
  }

  .phrase button{
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 1.2em;
    width: 165px;
    border-radius: 5px;
  }

  .phrase .cancel{
    background-color: #ecf0f1;
    border: 2px solid #c0392b;
    transition: all .2s;
  }

  .phrase .cancel:hover{
    background-color: #c0392b;
    color: #ecf0f1;
    cursor: pointer;
  }

  .phrase .validate{
    background-color: #ecf0f1;
    border: 2px solid #2ecc71;
    transition: all .2s;
  }

  .phrase .validate:hover{
    background-color: #2ecc71;
    color: #ecf0f1;
    cursor: pointer;
  }
</style>

// onpaste="return false;"
