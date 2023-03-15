import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('gr-index-description')
export default class IndexDescription extends LitElement {
    static get styles() {
        return css`
          /** Colors and variables **/
          :host {
          }
          @media (prefers-color-scheme: dark) {
            :host {
            }
          }

          /** Component styling **/
          :host {
            line-height: 22px;
          }

          :host .header-description {
            display: flex;
            align-items: flex-end;
            color: var(--dimmed-font-color);
          }

          :host .header-description-column {
            flex: 2;
          }

          :host .header-description a {
            color: var(--link-font-color);
            text-decoration: none;
          }
          :host .header-description a:hover {
            color: var(--link-font-color-hover);
          }

          :host hr {
            border: none;
            border-top: 1px solid var(--g-background-extra-color);
            width: 30%;
          }

          @media only screen and (max-width: 900px) {
            :host .header-description {
              padding: 0 8px;
              flex-direction: column;
            }

            :host .header-description-column {
              width: 100%;
            }
          }
        `;
    }

    @property({ type: Date }) generated_at = null;

    render() {
        return html`
            <div class="header-description">
                <div class="header-description-column">
                    This page lists all open pull-requests (PRs) assigned to every Godot engine maintenance team.
                    <hr>
                    Contributors are encouraged to collaborate and clear the backlog by giving these PRs a proper look
                    and either approving or declining them.
                    <br/>
                    Positively reviewed PRs are open to be merged by responsible maintainers.
                </div>
            </div>
        `;
    }
}
