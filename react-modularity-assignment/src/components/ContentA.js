import { Button } from './SharedComponents';
import Canvas from '../Business-Model-Canvas.jpg';


export function ContentA() {
  return (
    <section><h1>The Business Model Canvas</h1>
      <p><img src={Canvas} alt="Business Model Canvas" style={{ maxWidth: '100%' }}/>
</p>
      <Button label="Learn More about the Business Model Canvas" href="https://www.youtube.com/watch?v=IP0cUBWTgpY" />
    </section>
  );
}
