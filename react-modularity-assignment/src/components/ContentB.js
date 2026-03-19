import { Button } from './SharedComponents';
import bmgCover from '../Business-Model-Generation-book-cover.jpg';
import vpdCover from '../Value-Proposition-Design-book-cover.jpg';
import tbiCover from '../Testing-Business-Ideas-book-cover.jpg';

export function ContentB() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h2>Recommended Books</h2>

      <div style={{ marginBottom: '30px' }}>
        <img src={bmgCover} alt="Business Model Generation" style={{ maxWidth: '150px', display: 'block', marginBottom: '10px', margin: '0 auto 10px' }} />
        <Button label="Business Model Generation" href="https://bookshop.org/p/books/business-model-generation-a-handbook-for-visionaries-game-changers-and-challengers-alexander-osterwalder/e13eb2af0f86428d" />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <img src={vpdCover} alt="Value Proposition Design" style={{ maxWidth: '150px', display: 'block', marginBottom: '10px', margin: '0 auto 10px' }} />
        <Button label="Value Proposition Design" href="https://bookshop.org/p/books/value-proposition-design-how-to-create-products-and-services-customers-want-alan-smith/e618d90be7e971f5" />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <img src={tbiCover} alt="Testing Business Ideas" style={{ maxWidth: '150px', display: 'block', marginBottom: '10px', margin: '0 auto 10px' }} />
        <Button label="Testing Business Ideas" href="https://bookshop.org/p/books/testing-business-ideas-a-field-guide-for-rapid-experimentation-alexander-osterwalder/bca7f76d7c635ed5" />
      </div>
    </section>
  );
}
