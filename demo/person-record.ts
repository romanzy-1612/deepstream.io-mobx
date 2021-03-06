import { MobxReactionUpdate } from '@adobe/lit-mobx';
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { personStore } from './personStore';

@customElement('person-record')
export class DemoApp extends MobxReactionUpdate(LitElement) {
  private person = personStore;

  static styles = css`
    .root {
      background-color: lightblue;
      padding: 10px;
    }
  `;

  render() {
    if (!this.person.isReady)
      return html`
        <div class="root">
          Loading...
          <div>ready? ${this.person.isInitialized}</div>
          <div>does exist? ${this.person.doesExist}</div>
          <button
            @click=${() =>
              this.person.create({
                name: 'mark',
                age: 33,
              })}
          >
            create mark
          </button>
        </div>
      `;

    return html`
      <div class="root">
        <div><strong>Profile</strong></div>

        <div>name: ${this.person.doc.name}</div>
        <div>age: ${this.person.doc.age}</div>
        <div>Is old? ${this.person.doc.isOld ? 'yes' : 'no'}</div>
        <input
          .value=${this.person.doc.name}
          placeholder="enter name"
          @input=${(e: any) => {
            this.person.doc.setName(e.target.value);
          }}
        />
        <input
          .value=${this.person.doc.age.toString()}
          placeholder="enter age"
          @input=${(e: any) => {
            this.person.doc.setAge(Number(e.target.value));
          }}
        />
        <div>
          <strong>Interests</strong>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              @input=${() => {
                this.person.doc.toggleInterest('mobx');
              }}
              .checked=${this.person.doc.interestedIn.mobx}
            />
            MobX
          </label>
          <label>
            <input
              type="checkbox"
              @input=${() => {
                this.person.doc.toggleInterest('deepstream');
              }}
              .checked=${this.person.doc.interestedIn.deepstream}
            />
            Deepstream
          </label>
        </div>
        <button @click=${() => this.person.delete()}>
          Delete document ${this.person.path}
        </button>
      </div>
    `;
  }
}
