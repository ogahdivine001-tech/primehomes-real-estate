import Stats from '../ui/Stats.jsx';
import stats from '../../data/stats.js';
import './CompanyStats.css';

/**
 * CompanyStats
 * Homepage section (#5 in the spec): dark navy band with animated
 * counters proving the company's track record at a glance.
 */
export default function CompanyStats() {
  return (
    <section className="section company-stats" aria-label="Company statistics">
      <div className="container">
        <Stats items={stats} />
      </div>
    </section>
  );
}
