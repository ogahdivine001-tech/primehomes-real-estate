import './Loader.css';

/**
 * Loader
 * Small inline spinner shown while live Sanity data is being fetched.
 * Sample/fallback data never triggers this — it renders instantly.
 */
export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
