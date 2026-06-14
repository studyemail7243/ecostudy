import { useNavigate } from 'react-router-dom';
import { getAllTopics } from '../data/topics';

function TopicCard({ topic }) {
  const navigate = useNavigate();

  return (
    <div className="topic-card" onClick={() => navigate(`/topic/${topic.id}`)}>
      <div className="card-number" style={{ color: topic.color || '#22c55e', background: `${topic.color || '#22c55e'}20` }}>
        {topic.id}
      </div>
      <div className="card-title">{topic.title}</div>
      <div className="card-desc">{topic.description}</div>
      <div className="card-arrow" style={{ color: topic.color || '#22c55e' }}>
        Explore →
      </div>
    </div>
  );
}

function Dashboard() {
  const topics = getAllTopics();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Environmental Science Topics</h1>
        <p>15 comprehensive topics explained for 10-mark answers — with interactive visuals to help you remember!</p>
      </div>
      <div className="topics-grid">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
