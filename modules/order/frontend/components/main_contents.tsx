import * as React from "react";
import { SectionHeader } from "./section_header";
import { SectionBody } from "./section_body";
import { SectionFooter } from "./section_footer";

export class MainContents extends React.Component<{}, {}> {
  render () {
    return (
      <section className='main-section'>
        <div className='main-section-content' id='main-section-content'>
          <div className='left-panel'>
            <SectionHeader />
            <SectionBody />
            <SectionFooter />
          </div>
        </div>
      </section>
    )
  }
}
