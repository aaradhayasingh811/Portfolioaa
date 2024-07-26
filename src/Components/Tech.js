import React from 'react'

import './Tech.css'

export default function Tech(){
    return (

        <>
        <div className="chest">
  <div className="chest__panel chest__panel--back" />
  <div className="chest__panel chest__panel--top" />
  <div className="chest__panel chest__panel--bottom" />
  <div className="chest__panel chest__panel--right" />
  <div className="chest__panel chest__panel--front">
    <div className="chest__panel chest__panel--front-frame" />
  </div>
  <div className="chest__panel chest__panel--left" />
  <div className="chest__drawer drawer" data-position={1}>
    <details>
      <summary />
    </details>
    <div className="drawer__structure">
      <div className="drawer__panel drawer__panel--back">
        <span>Frontend</span>
      </div>
      <div className="drawer__panel drawer__panel--bottom" />
      <div className="drawer__panel drawer__panel--right" />
      <div className="drawer__panel drawer__panel--left" />
      <div className="drawer__panel drawer__panel--front" />
    </div>
  </div>
  <div className="chest__drawer drawer" data-position={2}>
    <details>
      <summary />
    </details>
    <div className="drawer__structure">
      <div className="drawer__panel drawer__panel--back">
        <span>Backened</span>
      </div>
      <div className="drawer__panel drawer__panel--bottom" />
      <div className="drawer__panel drawer__panel--right" />
      <div className="drawer__panel drawer__panel--left" />
      <div className="drawer__panel drawer__panel--front" />
    </div>
  </div>
  <div className="chest__drawer drawer" data-position={3}>
    <details>
      <summary />
    </details>
    <div className="drawer__structure">
      <div className="drawer__panel drawer__panel--back">
        <span>Database</span>
      </div>
      <div className="drawer__panel drawer__panel--bottom" />
      <div className="drawer__panel drawer__panel--right" />
      <div className="drawer__panel drawer__panel--left" />
      <div className="drawer__panel drawer__panel--front" />
    </div>
  </div>
</div>

        </>
    );
}