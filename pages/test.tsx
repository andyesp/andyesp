import BoxWithScalingAnimatedBorders from '~/components/test/BoxWithScalingAnimatedBorders'
import TextWithAnimatedBorder from '~/components/test/TextWithAnimatedBorder'

/**
 * Test
 */

const Test = () => (
  <div className="flex flex-col">
    <div className="mb-8">
      <BoxWithScalingAnimatedBorders />
    </div>
    <TextWithAnimatedBorder />
  </div>
)

/**
 * Exports
 */

export default Test
