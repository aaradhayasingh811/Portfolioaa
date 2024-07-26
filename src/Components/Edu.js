import React from 'react'
import Tech from './Tech';


export default function Edu(){
    return(
        <>
        <div className="row w-2/3 m-auto my-2">
            <div className="col-lg-6 md:border-r-2 md:border-r-white">
                <Tech className="mx-auto md:mx-0" />
            </div>
            <div className="col-lg-6 my-4 md:my-0">
 <div className="text-[#a16207] text-6xl hover:text-[#a16207]">
                <ul className="skills-container grid grid-rows-auto grid-cols-4 gap-2">
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons devicons-html5"
      title="HTML5"
    />
    {/* <p>HTML5</p> */}
  </li>
  <li className="skills-title">
    <span aria-hidden="true" className="devicons devicons-css3" title="CSS" />
    {/* <p>CSS</p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-javascript_badge"
      title="JavaScript & ES6"
    />
    {/* <p>JavaScript + ES6</p> */}
  </li>
  <li className="skills-title">
    <span aria-hidden="true" className="devicons devicons-nodejs" title="Node Js" />
    {/* <p>Sass</p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-jquery"
      title="jQuery"
    />
    {/* <p>jQuery</p> */}
  </li>
  
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-bootstrap"
      title="Bootstrap"
    />
    {/* <p>React</p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-mysql"
      title="Mysql"
    />
    {/* <p>Firebase</p> */}
  </li>
  <li className="skills-title">
    <span aria-hidden="true" className="devicons devicons-git" title="Git" />
    {/* <p>Git</p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-opensource"
      title="Open Source"
    />
    {/* <p>Terminal</p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-responsive"
      title="Responsive Design"
    />
    {/* <p>
      { Responsive }
      <br />
      Design
    </p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-mongodb"
      title="Mongodb"
    />
    {/* <p>Accessibility</p> */}
  </li>
  <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-joomla"
      title="React"
    />
    </li>
    <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-java"
      title="Java"
    />
    </li>
    <li className="skills-title">
    <span
      aria-hidden="true"
      className="devicons devicons-cpp"
      title="Cpp"
    />
    </li>

</ul>

                </div>
            </div>
        </div>
        </>
    );
}