import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteCards2'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))
        }
      </BentoGrid>
      <InfiniteMovingCards
        items={[
          { quote: "Python", name: "", title: "" },
          { quote: "CSS", name: "", title: "" },
          { quote: "React JS", name: "", title: "" },
          { quote: "Next JS", name: "", title: "" },
          { quote: "MySQL", name: "", title: "" },
        ]}
        pauseOnHover
        direction='left'
        speed='slow'
        className=""
      />
    </section>
  )
}

export default Grid