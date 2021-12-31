
import {html, css, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {ENDPOINTS} from "../constants/commonconstants.js";

@customElement('test-page-2')
export class TestPage2 extends LitElement {
  static styles = css`p { color: blue }`;
  
  @property()
  quoteString : any = '';

  @property({type: Boolean})
  resultLoaded = false;

  @query("input#name")
  searchString!: HTMLInputElement; 

  async fetchData() {
    this.resultLoaded = false;
    this.quoteString = '';
    console.log(this.searchString.value);
    const response = await fetch(ENDPOINTS.ADVICE_ENDPOINT + "?text=" + this.searchString.value);
    const json = await response.json();
    console.log(json);
    this.resultLoaded = true;
    this.quoteString = json;
    return json;
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
    <div style="margin-top:5rem"></div>
    <form class="pa4 black-80">
      <div style = "margin-left:30%;margin-right:10%" class="measure">
        <label for="name" class="f6 b db mb2">Search Term for Advice <span class="normal black-60">(optional)</span></label>
        <input id="name" style="width:50rem" class="input-reset ba b--black-20 pa2 mb2 db w-200" type="text" aria-describedby="name-desc">
        <small id="name-desc" class="f6 black-60 db mb2">Enter some text or leave it blank</small>
      </div>
    </form>
      <div class="center">
        <a @click=${this.fetchData} class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue">Get Your Advice</a>
      </div>
      <div style="margin-top:2rem" class="pa4 center">
          <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
          <p class="f5 f4-m f3-l lh-copy measure mt0">
            ${ this.resultLoaded ? this.quoteString["message"] : ''}
          </p>
          ${ this.resultLoaded ? html`<cite class="f6 ttu tracked fs-normal">―Baba Ch**iya</cite>`:null}
        </blockquote>
      </div>
    `;
  }
}
