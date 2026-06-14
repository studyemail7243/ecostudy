/* ========== VISUAL COMPONENTS FOR EACH TOPIC ========== */

// 1. Ecosystem Structure
export function EcosystemVisual() {
  return (
    <div className="ecosystem-visual">
      <div className="sun"></div>
      <div className="energy-arrow" style={{ top: '80px', left: '50%', transform: 'translateX(-50%)' }}>↓</div>
      <div className="producers">
        <div className="plant"></div>
        <div className="plant" style={{ animationDelay: '0.5s' }}></div>
        <div className="plant" style={{ animationDelay: '1s' }}></div>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div style={{ color: '#22c55e', fontSize: '14px', fontWeight: 600 }}>Producers → Consumers → Decomposers</div>
        <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '4px' }}>Energy flows unidirectionally • 10% Law at each level</div>
      </div>
    </div>
  );
}

// 2. Classification
export function ClassificationVisual() {
  return (
    <div className="bio-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '500px', margin: '0 auto' }}>
      <div className="bio-cell">
        <div className="icon">🌳</div>
        <div className="label">Natural</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Forests, Oceans, Deserts</div>
      </div>
      <div className="bio-cell">
        <div className="icon">🏭</div>
        <div className="label">Artificial</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Farms, Aquariums, Gardens</div>
      </div>
      <div className="bio-cell">
        <div className="icon">🏔️</div>
        <div className="label">Terrestrial</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Land-based ecosystems</div>
      </div>
      <div className="bio-cell">
        <div className="icon">🌊</div>
        <div className="label">Aquatic</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Freshwater & Marine</div>
      </div>
    </div>
  );
}

// 3. Values
export function ValuesVisual() {
  return (
    <div className="pyramid">
      <div className="pyramid-level pyramid-l4">Cultural</div>
      <div className="pyramid-level pyramid-l3">Regulating</div>
      <div className="pyramid-level pyramid-l2">Provisioning</div>
      <div className="pyramid-level pyramid-l1">Supporting</div>
      <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '8px' }}>Ecosystem Services Pyramid</div>
    </div>
  );
}

// 4. Land Resources
export function LandVisual() {
  return (
    <div className="land-visual">
      <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '8px' }}>Global Land Use Distribution</div>
      <div className="land-bar land-agri">Agriculture ~40%</div>
      <div className="land-bar land-forest">Forests ~30%</div>
      <div className="land-bar land-urban">Urban/Industry ~15%</div>
      <div className="land-bar land-waste">Wasteland ~10%</div>
      <div className="land-bar land-other">Other ~5%</div>
    </div>
  );
}

// 5. Water Resources
export function WaterVisual() {
  return (
    <div className="water-cycle">
      <div className="cloud">☁️ Condensation</div>
      <div className="rain-drop" style={{ left: '45%', top: '80px', animationDelay: '0s' }}></div>
      <div className="rain-drop" style={{ left: '50%', top: '80px', animationDelay: '0.3s' }}></div>
      <div className="rain-drop" style={{ left: '55%', top: '80px', animationDelay: '0.6s' }}></div>
      <div className="evaporation-arrow">↑ Evaporation</div>
      <div className="water-body">🌊 Oceans</div>
      <div style={{ position: 'absolute', top: '50%', right: '20px', color: '#22c55e', fontSize: '12px', fontWeight: 600 }}>
        Precipitation<br/>→<br/>Infiltration<br/>→<br/>Runoff
      </div>
    </div>
  );
}

// 6. Biodiversity
export function BiodiversityVisual() {
  return (
    <div className="bio-grid">
      <div className="bio-cell">
        <div className="icon">🧬</div>
        <div className="label">Genetic</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>50,000 rice varieties in India</div>
      </div>
      <div className="bio-cell">
        <div className="icon">🐅</div>
        <div className="label">Species</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>1.8M known; 8-15M estimated</div>
      </div>
      <div className="bio-cell">
        <div className="icon">🌍</div>
        <div className="label">Ecosystem</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Forests, coral reefs, wetlands</div>
      </div>
    </div>
  );
}

// 7. Conservation
export function ConservationVisual() {
  return (
    <div className="bio-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '500px', margin: '0 auto' }}>
      <div className="bio-cell" style={{ borderColor: '#22c55e' }}>
        <div className="icon">🏞️</div>
        <div className="label">In-situ</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>National Parks, Sanctuaries, Biosphere Reserves</div>
      </div>
      <div className="bio-cell" style={{ borderColor: '#3b82f6' }}>
        <div className="icon">🏛️</div>
        <div className="label">Ex-situ</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Zoos, Botanical Gardens, Seed Banks</div>
      </div>
    </div>
  );
}

// 8. Global Warming
export function GlobalWarmingVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="thermometer">
        <div className="thermometer-fill"></div>
        <div className="thermometer-bulb"></div>
      </div>
      <div style={{ textAlign: 'left' }}>
        <div style={{ color: '#ef4444', fontSize: '18px', fontWeight: 700 }}>+1.1°C since 1850</div>
        <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '8px' }}>
          • CO₂: 280→420 ppm<br/>
          • Sea level: +3.3 mm/year<br/>
          • Target: limit to 1.5°C
        </div>
      </div>
    </div>
  );
}

// 9. Ozone Layer
export function OzoneVisual() {
  return (
    <div className="ozone-visual">
      <div className="ozone-layer">
        OZONE LAYER (O₃)
        <div className="ozone-hole"></div>
      </div>
      <div className="uv-ray" style={{ left: '35%', top: '60px' }}></div>
      <div className="uv-ray" style={{ left: '50%', top: '60px', animationDelay: '0.5s' }}></div>
      <div className="uv-ray" style={{ left: '65%', top: '60px', animationDelay: '1s' }}></div>
      <div style={{ position: 'absolute', bottom: '20px', textAlign: 'center', color: '#94a3b8', fontSize: '12px' }}>
        <span style={{ color: '#f59e0b' }}>UV rays</span> → blocked by ozone (97-99%) → <span style={{ color: '#ef4444' }}>hole allows through</span>
      </div>
    </div>
  );
}

// 10. Solid Waste
export function SolidWasteVisual() {
  return (
    <div className="waste-visual">
      <div className="waste-item">
        <div className="waste-bin bin-green">🍃</div>
        <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 600 }}>Organic</div>
      </div>
      <div className="waste-item">
        <div className="waste-bin bin-blue">📄</div>
        <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 600 }}>Recyclable</div>
      </div>
      <div className="waste-item">
        <div className="waste-bin bin-red">⚠️</div>
        <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: 600 }}>Hazardous</div>
      </div>
      <div className="waste-item">
        <div className="waste-bin bin-yellow">🗑️</div>
        <div style={{ fontSize: '12px', color: '#fbbf24', fontWeight: 600 }}>General</div>
      </div>
    </div>
  );
}

// 11. E-Waste
export function EWasteVisual() {
  return (
    <div className="waste-visual">
      <div className="waste-item">
        <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'rgba(100,100,100,0.3)', border: '2px solid #64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>💻</div>
        <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Laptops</div>
      </div>
      <div className="waste-item">
        <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'rgba(100,100,100,0.3)', border: '2px solid #64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>📱</div>
        <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Phones</div>
      </div>
      <div className="waste-item">
        <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'rgba(100,100,100,0.3)', border: '2px solid #64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>📺</div>
        <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>TVs</div>
      </div>
      <div className="waste-item">
        <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'rgba(100,100,100,0.3)', border: '2px solid #64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>🔋</div>
        <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Batteries</div>
      </div>
      <div style={{ width: '100%', textAlign: 'center', color: '#ef4444', fontSize: '13px', marginTop: '8px' }}>
        ⚠️ Contains: Lead, Mercury, Cadmium, BFRs
      </div>
    </div>
  );
}

// 12. Greenhouse Effect
export function GreenhouseVisual() {
  return (
    <div className="greenhouse-visual">
      <div className="glass-dome"></div>
      <div className="earth"></div>
      <div className="heat-ray" style={{ left: '40%', top: '80px', animationDelay: '0s' }}></div>
      <div className="heat-ray" style={{ left: '50%', top: '80px', animationDelay: '0.5s' }}></div>
      <div className="heat-ray" style={{ left: '60%', top: '80px', animationDelay: '1s' }}></div>
      <div style={{ position: 'absolute', top: '20px', color: '#fbbf24', fontSize: '14px', fontWeight: 600 }}>☀️ Solar Radiation</div>
      <div style={{ position: 'absolute', bottom: '20px', color: '#ef4444', fontSize: '12px', textAlign: 'center' }}>
        Infrared heat trapped by GHGs → warming
      </div>
    </div>
  );
}

// 13. EIA
export function EIAVisual() {
  const steps = ['Screening', 'Scoping', 'Baseline', 'Impact', 'Mitigation', 'EIS', 'Public', 'Decision', 'Monitoring'];
  return (
    <div className="eia-flow">
      {steps.map((step, i) => (
        <div key={i}>
          <div className="eia-step">{i + 1}. {step}</div>
          {i < steps.length - 1 && <div className="eia-arrow">↓</div>}
        </div>
      ))}
    </div>
  );
}

// 14. Air Act
export function AirActVisual() {
  return (
    <div className="bio-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '500px', margin: '0 auto' }}>
      <div className="bio-cell" style={{ borderColor: '#3b82f6' }}>
        <div className="icon">🏢</div>
        <div className="label">CPCB</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Central Pollution Control Board</div>
      </div>
      <div className="bio-cell" style={{ borderColor: '#06b6d4' }}>
        <div className="icon">🏛️</div>
        <div className="label">SPCB</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>State Pollution Control Boards</div>
      </div>
      <div className="bio-cell" style={{ borderColor: '#22c55e' }}>
        <div className="icon">📋</div>
        <div className="label">CTE → CTO</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Consent to Establish → Operate</div>
      </div>
      <div className="bio-cell" style={{ borderColor: '#ef4444' }}>
        <div className="icon">⚖️</div>
        <div className="label">Penalty</div>
        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Up to 6 years imprisonment</div>
      </div>
    </div>
  );
}

// 15. Policy
export function PolicyVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22c55e', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#22c55e' }}>NEP 2006</div>
        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>National Environment Policy</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        <div className="bio-cell" style={{ padding: '12px' }}>
          <div className="label" style={{ fontSize: '11px' }}>NAPCC</div>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>8 Missions</div>
        </div>
        <div className="bio-cell" style={{ padding: '12px' }}>
          <div className="label" style={{ fontSize: '11px' }}>NFP 1988</div>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>33% Cover</div>
        </div>
        <div className="bio-cell" style={{ padding: '12px' }}>
          <div className="label" style={{ fontSize: '11px' }}>NGT 2010</div>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>Green Court</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '12px' }}>
        3 Principles: Intergenerational Equity | Precautionary | Polluter Pays
      </div>
    </div>
  );
}
