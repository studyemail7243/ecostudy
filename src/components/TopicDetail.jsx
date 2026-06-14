import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Eye, Lightbulb } from 'lucide-react';
import { getTopicById } from '../data/topics';
import {
  EcosystemVisual, ClassificationVisual, ValuesVisual,
  LandVisual, WaterVisual, BiodiversityVisual, ConservationVisual,
  GlobalWarmingVisual, OzoneVisual, SolidWasteVisual, EWasteVisual,
  GreenhouseVisual, EIAVisual, AirActVisual, PolicyVisual
} from './Visuals';

const visualComponents = {
  1: EcosystemVisual,
  2: ClassificationVisual,
  3: ValuesVisual,
  4: LandVisual,
  5: WaterVisual,
  6: BiodiversityVisual,
  7: ConservationVisual,
  8: GlobalWarmingVisual,
  9: OzoneVisual,
  10: SolidWasteVisual,
  11: EWasteVisual,
  12: GreenhouseVisual,
  13: EIAVisual,
  14: AirActVisual,
  15: PolicyVisual,
};

function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    const t = getTopicById(parseInt(id));
    if (t) setTopic(t);
  }, [id]);

  if (!topic) {
    return (
      <div className="topic-detail">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Back to Topics
        </button>
        <p>Topic not found.</p>
      </div>
    );
  }

  const Visual = visualComponents[topic.id] || (() => null);

  return (
    <div className="topic-detail fade-in">
      <button className="back-btn" onClick={() => navigate('/')}>
        <ArrowLeft size={18} /> Back to Topics
      </button>

      <div className="detail-header">
        <span className="marks-badge">10 Marks Answer</span>
        <h1>{topic.id}. {topic.title}</h1>
        <p className="subtitle">{topic.description}</p>
      </div>

      <div className="visual-container">
        <Visual />
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button
          className="back-btn"
          onClick={() => setActiveTab('content')}
          style={{ background: activeTab === 'content' ? 'rgba(34, 197, 94, 0.3)' : undefined }}
        >
          <BookOpen size={16} /> Detailed Answer
        </button>
        <button
          className="back-btn"
          onClick={() => setActiveTab('revision')}
          style={{ background: activeTab === 'revision' ? 'rgba(34, 197, 94, 0.3)' : undefined }}
        >
          <Lightbulb size={16} /> Quick Revision Session
        </button>
      </div>

      {activeTab === 'content' ? (
        <div className="slide-in">
          {topic.content.map((section, idx) => (
            <div key={idx} className="content-section">
              <h2>
                <Eye size={20} color="#22c55e" />
                {section.heading}
              </h2>
              {section.text && <p>{section.text}</p>}
              {section.points && (
                <ul>
                  {section.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="content-section slide-in">
          <h2>
            <Lightbulb size={20} color="#22c55e" />
            Quick Revision Session
          </h2>
          <ul>
            {topic.memoryTricks.map((trick, i) => (
              <li key={i}><strong>{trick.title}:</strong> {trick.desc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopicDetail;
