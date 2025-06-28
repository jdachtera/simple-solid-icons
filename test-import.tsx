// Test file to verify the generated icons work correctly
import { TablerAccessPoint, HeroAdjustmentsHorizontal, LucideHome } from './src/index'

// This should compile without errors if our types are correct
const TestComponent = () => (
  <div>
    <TablerAccessPoint class="icon" />
    <HeroAdjustmentsHorizontal width="32" height="32" />
    <LucideHome stroke="red" stroke-width="1" />
  </div>
)

export default TestComponent
