import React from "react";
import "./Foot.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

function Foot() {
  return (
    <div>
      <div>
        <footer className="footer">
          <div className="container row">
            <div className="footer-col">
              <h4>
                 <span className=" text-[#2d9687] ">AA</span>radhaya Singh</h4>
              <ul>
                <li className="text-white">
                  {" "}
                  MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY,
                  <br /> GORAKHPUR, UTTAR PRADESH - 273010
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/project">Projects</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1OA-EoFOTAWxlPKZCP6kK9TRt2r_1eofh/view?usp=sharing">Curriculam Vitae</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Coding Platform</h4>
              <ul>
                <li>
                  <a href="https://codeforces.com/profile/aaradhayasingh811">Codeforces</a>
                </li>
                <li>
                  <a href="https://www.codechef.com/users/singhiitian811">Codechef</a>
                </li>
                <li>
                  <a href="https://leetcode.com/u/aaradhayasingh811/">Leetcode</a>
                </li>
                <li>
                  <a href="https://www.geeksforgeeks.org/user/aaradhayasingh811/">GFG</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social Links</h4>
              <div className="social-links">
               <a href="https://github.com/aaradhayasingh811"><GitHubIcon/> </a>
               <a href="https://www.linkedin.com/in/aaradhaya-singh-693434257/"><LinkedInIcon /></a>
               <a href="mailto:aaradhayasingh811@gmail.com"><EmailIcon /></a>
               <a href=""><InstagramIcon /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Foot;