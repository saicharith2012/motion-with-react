import { Card } from "@/global"

export const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://i.scdn.co/image/ab67616d00001e02ebc8cfac8b586bc475b04918",
    ctaText: "Play",
    ctaLink:
      "https://www.youtube.com/watch?v=TdrL3QxjyVw&list=RDTdrL3QxjyVw&start_radio=1",
    content: () => {
      return (
        <p className="text-xs text-neutral-900">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "The Weeknd",
    title: "Blinding Lights",
    src: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
    ctaText: "Play",
    ctaLink:
      "https://www.youtube.com/watch?v=4NRXx6U8ABQ&list=RD4NRXx6U8ABQ&start_radio=1",
    content: () => {
      return (
        <p className="text-xs text-neutral-900">
          The Weeknd, a Canadian singer-songwriter, redefined modern pop and R&B
          with his distinctive falsetto and moody production. Rising from
          mixtape fame, he has become a global superstar with chart-topping hits
          and a futuristic aesthetic. <br /> <br /> Known for blending
          synthwave, alternative R&B, and pop, his music often explores themes
          of love, excess, and emotional conflict, cementing him as one of the
          most influential artists of his generation.
        </p>
      );
    },
  },
  {
    description: "Taylor Swift",
    title: "All Too Well (10 Minute Version)",
    src: "https://i.scdn.co/image/ab67616d00001e02318443aab3531a0558e79a4d",
    ctaText: "Play",
    ctaLink:
      "https://www.youtube.com/watch?v=sRxrwjOtIag&list=RDsRxrwjOtIag&start_radio=1",
    content: () => {
      return (
        <p className="text-xs text-neutral-900">
          Taylor Swift, one of the most successful singer-songwriters in
          history, is celebrated for her storytelling through music.
          Transitioning from country roots to global pop stardom, she has
          continuously reinvented her sound and image. <br /> <br /> With her
          songwriting prowess, she has built a career on capturing universal
          emotions of love, heartbreak, and personal growth, earning countless
          awards and a fiercely loyal fanbase.
        </p>
      );
    },
  },
  {
    description: "Kendrick Lamar",
    title: "HUMBLE.",
    src: "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699",
    ctaText: "Play",
    ctaLink:
      "https://www.youtube.com/watch?v=tvTRZJ-4EyI&list=RDtvTRZJ-4EyI&start_radio=1",
    content: () => {
      return (
        <p className="text-xs text-neutral-900">
          Kendrick Lamar, hailed as one of the greatest rappers of his era,
          blends sharp lyricism with socially conscious storytelling. His work
          often tackles race, politics, and personal struggles while pushing the
          boundaries of hip-hop. <br /> <br /> With Pulitzer Prize–winning
          albums and a reputation for artistry that balances mainstream success
          with cultural impact, he stands as a defining voice of modern rap.
        </p>
      );
    },
  },
  {
    description: "Billie Eilish",
    title: "Bad Guy",
    src: "https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce",
    ctaText: "Play",
    ctaLink:
      "https://www.youtube.com/watch?v=DyDfgMOUjCI&list=RDDyDfgMOUjCI&start_radio=1",
    content: () => {
      return (
        <p className="text-xs text-neutral-900">
          Billie Eilish, a groundbreaking pop artist, gained fame as a teenager
          with her dark, minimalist sound and unique vocal delivery. Alongside
          her brother and producer Finneas, she has redefined what mainstream
          pop can sound like. <br /> <br /> Known for her genre-bending style,
          haunting aesthetics, and bold authenticity, Billie has become a
          generational icon with multiple Grammys and global acclaim.
        </p>
      );
    },
  },
];