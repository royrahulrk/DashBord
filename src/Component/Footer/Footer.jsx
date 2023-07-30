import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterSection = () => {
  return (
  
      <Footer className="main-footer text-center">
      <div className="container " align="center">
        <div className="row row-sm">
          <div className="col-md-12">
            <span>
              Copyright © 2021 <a href="https://www.google.com/">Spruha</a>. Designed by{' '}
              <a href="hhttps://www.google.com/">Spruko</a> All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </Footer>
   
  )
}

export default FooterSection