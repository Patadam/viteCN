

import { useState } from 'react'


function Footer() {
    return (
      <div id="footer">
        <section className="global-padding">
          <div className="contentwrapper">
            <div id="congratulations">
              hello@codenetwork.co
              <div id="copyright">
                &copy; {new Date().getFullYear().toString()} Code Network
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  

export default Footer
