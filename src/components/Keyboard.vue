<template>
  <div class="keyboard">
    <img src='../assets/img/clavier.png' alt='keyboard' title='Clavier AZERTY'/>
    <div class="char" :id='char' v-for="char in chars"></div>
    
    <div class='legendContainer'>
      <div class="plain">
        <div class="legend" id='plain'></div>
        <p>: appuyer</p>
      </div>
      <div class="empty">
        <div class="legend" id='empty'></div>
        <p>: maintenir</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyboard',
    props: ['char'],
    data () {
      return {
        chars: [
          'exp', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'deg', 'plus', 'del',
          'tab', 'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'circonflex', 'dollard', 'enter',
          'capsLock', 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'ù', 'asterix',
          'magG', 'chevron', 'w', 'x', 'c', 'v', 'b', 'n', 'virgule', 'pVirgule', 'deuxP', 'exclam',
          'magD', 'ctrlG', 'winG', 'alt', 'space', 'altGr', 'winD', 'rClick', 'ctrlD'
        ],
        charsSpec: [
          {cl: 'one', base: '&', maj: '1'},
          {cl: 'two', base: 'é', maj: '2', altGr: '~'},
          {cl: 'three', base: '"', maj: '3', altGr: '#'},
          {cl: 'four', base: '\'', maj: '4', altGr: '{'},
          {cl: 'five', base: '(', maj: '5', altGr: '['},
          {cl: 'six', base: '-', maj: '6', altGr: '|'},
          {cl: 'seven', base: 'è', maj: '7', altGr: '`'},
          {cl: 'eight', base: '_', maj: '8', altGr: '\\'},
          {cl: 'nine', base: 'ç', maj: '9', altGr: '^'},
          {cl: 'zero', base: 'à', maj: '0', altGr: '@'},
          {cl: 'deg', base: ')', maj: '°', altGr: ']'},
          {cl: 'plus', base: '=', maj: '+', altGr: '}'},
          {cl: 'dollard', base: '=', maj: '+', altGr: '}'},
          {cl: 'ù', base: '=', maj: '+', altGr: '}'},
          {cl: 'asterix', base: '=', maj: '+', altGr: '}'},
          {cl: 'virgule', base: '=', maj: '+', altGr: '}'},
          {cl: 'pVirgule', base: '=', maj: '+', altGr: '}'},
          {cl: 'deuxP', base: '=', maj: '+', altGr: '}'},
          {cl: 'exclam', base: '=', maj: '+', altGr: '}'}
        ],
        isHigherCase: false,
        isAltGr: false,
        isMaj: false
      }
    },
    methods: {
      displayButton (char) {
        this.clearAll()
        let thisChar = char

        if (
          char === '1' || char === '2' || char === '3' || char === '4' || char === '5' ||
          char === '7' || char === '8' || char === '9' || char === '0' || char === '°' ||
          char === '+' || char === '£' || char === '%' || char === 'µ' || char === '?' ||
          char === '6' || char === '.' || char === '/' || char === '§' || char === '>'
        ) {
          this.isMaj = true
        }

        if (
          char === '~' || char === '#' || char === '{' || char === '[' || char === '|' || char === '¤' ||
          char === '`' || char === '\\' || char === '^' || char === '@' || char === ']'
        ) {
          this.isAltGr = true
        }

        this.charsSpec.forEach(value => {
          if (char === value.maj || char === value.altGr || char === value.base) {
            thisChar = value.cl
          }
        })

        if (thisChar === thisChar.toUpperCase()) {
          this.isHigherCase = true
          thisChar = thisChar.toLowerCase()
        }

        this.chars.forEach(value => {
          console.log(value, thisChar)
          if (value === thisChar) {
            this.rules(thisChar)
          }
        })
      },
      clearAll () {
        this.chars.forEach(value => {
          document.getElementById(value).style.removeProperty('display')
        })
      },
      rules (char) {
        document.getElementById(char).style.display = 'inherit'

        if (this.isHigherCase || this.isMaj) {
          document.getElementById('magG').style.display = 'inherit'
        }

        if (this.isAltGr) {
          document.getElementById('altGr').style.display = 'inherit'
        }

        this.isHigherCase = false
        this.isMaj = false
        this.isAltGr = false
      }
    },
    created () {
      this.$parent.$on('char', char => {
        this.displayButton(char)
      })
    }
  }
</script>

<style>
  .keyboard{
    position: relative;
    width: 800px;
    margin: auto;
  }
  .keyboard .char{
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #8e44ad;
    top: 0;
    left: 0;
    display: none;
  }

  .legend{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #8e44ad;
  }

  .legendContainer{
    width: 360px; 
    height: 30px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    border: 2px solid #8e44ad;
    border-radius: 3px;
    padding-top: 5px; padding-bottom: 5px;
    padding-left: 20px; padding-right: 20px;
  }


  .keyboard #magG, #magD, #ctrlG, #ctrlD, #altGr, #empty{
    border: 3px solid #8e44ad;
    background-color: rgba(0, 0, 0, 0);
    width: 16px;
    height: 16px;
  }

  .plain, .empty{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
  }

  #exp, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #deg, #plus, #del{top: 13px;}

  #tab, #a, #z, #e, #r, #t, #y, #u, #i, #o, #p, #circonflex, #dollard, #enter{top: 63px;}

  #capsLock, #q, #s, #d, #f, #g, #h, #j, #k, #l, #m, #ù, #asterix{top: 113px;}

  #magG, #chevron, #w, #x, #c, #v, #b, #n, #virgule, #pVirgule, #deuxP, #exclam, #magD{top: 163px;}

  #ctrlG, #winG, #alt, #space, #altGr, #winD, #rClick, #ctrlD{top: 213px;} 

  #exp{left: 17px;}
  #one{left: 72px;}
  #two{left: 125px;}
  #three{left: 178px;}
  #four{left: 232px;}
  #five{left: 286px;}
  #six{left: 340px;}
  #seven{left: 393px;}
  #eight{left: 448px;}
  #nine{left: 502px;}
  #zero{left: 555px;}
  #deg{left: 609px;}
  #plus{left: 662px;}
  #del{left: 740px;}

  #tab{left: 25px;}
  #a{left: 96px;}
  #z{left: 150px;}
  #e{left: 205px;}
  #r{left: 258px;}
  #t{left: 312px;}
  #y{left: 366px;}
  #u{left: 420px;}
  #i{left: 473px;}
  #o{left: 527px;}
  #p{left: 580px;}
  #circonflex{left: 635px;}
  #dollard{left: 688px;}
  #enter{left: 760px; top: 90px;}

  #capsLock{left: 35px;}
  #q{left: 113px;}
  #s{left: 166px;}
  #d{left: 221px;}
  #f{left: 274px;}
  #g{left: 328px;}
  #h{left: 382px;}
  #j{left: 436px;}
  #k{left: 489px;}
  #l{left: 543px;}
  #m{left: 596px;}
  #ù{left: 651px;}
  #asterix{left: 702px;}

  #magG{left: 20px;}
  #chevron{left: 80px;}
  #w{left: 133px;}
  #x{left: 186px;}
  #c{left: 240px;}
  #v{left: 295px;}
  #b{left: 348px;}
  #n{left: 402px;}
  #virgule{left: 455px;}
  #pVirgule{left: 509px;}
  #deuxP{left: 563px;}
  #exclam{left: 616px;}
  #magD{left: 730px;}

  #ctrlG{left: 22px;}
  #winG{left: 85px;}
  #alt{left: 145px;}
  #space{left: 365px;}
  #altGr{left: 575px;}
  #winD{left: 637px;}
  #rClick{left:698px;}
  #ctrlD{left: 760px;}

</style>
