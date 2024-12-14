import { useIssueMatch } from 'Hooks/useIssueMatch';

import { IssueTextImage } from './IssueTextImage';

export const IssuesSection = () => {
  const isFirstIssue = useIssueMatch('1');
  const isSecondIssue = useIssueMatch('2');
  const isThirdIssue = useIssueMatch('3');
  const isFourthIssue = useIssueMatch('4');

  return (
    <section className="snap-start px-4 text-center font-nice-regular text-3xl md:px-10 lg:px-20 lg:text-5xl xl:text-6xl">
      {isFirstIssue && (
        <>
          In Solomiya&rsquo;s very first issue, you will encounter some of those who grew up in an independent Ukraine
          and are paying a huge price for the European integration they seek. We invite you to meet young creatives from
          Kyiv and elsewhere who write <IssueTextImage image="sm1_andrii" />
          <IssueTextImage image="sm1_vsevolod" />, create <IssueTextImage image="sm1_christina" />
          <IssueTextImage image="sm1_sonya" /> and don&rsquo;t stop self-expressing their identities through their
          fashion <IssueTextImage image="sm1_portraits" />. Further, we show for the first time brandnew works by Sasha
          Kurmaz <IssueTextImage image="sm1_kurmaz" />, who also created the cover motif{' '}
          <IssueTextImage image="sm1_cover" />. While Mykola Ridnyi&rsquo;s iconic series “Blindspot”{' '}
          <IssueTextImage image="sm1_ridnyi" /> recalls the beginning of the Russian invasion of Ukraine in 2014, a
          protocol traces the lives of two young inhabitants from Bucha who survived the Russian occupation in 2022{' '}
          <IssueTextImage image="sm1_bucha" />.
        </>
      )}
      {isSecondIssue && (
        <>
          Having established a distinct voice with the first issue of Solomiya, we continue to showcase the works of
          talented artists who reflect on the complexity and the of the Ukrainian context{' '}
          <IssueTextImage image="sm2_vsevolod" /> <IssueTextImage image="sm2_dima_tolkachov" />
          <IssueTextImage image="sm2_dmytro" />. In the magazine&rsquo;s second issue, we invite you to appreciate
          artworks that were created in Kherson despite the russian occupation <IssueTextImage image="sm2_kherart" />;
          to read the stories of Ukrainians who had to flee the war twice — in 2014 and 2022{' '}
          <IssueTextImage image="sm2_occupation" />; to engage in conversations that explore the concept of the heroic{' '}
          <IssueTextImage image="sm2_hero" /> and the language of witnessing; and to highlight perspectives of Crimean
          Tatars <IssueTextImage image="sm2_ziyatdinova_crimea" /> that russia has been attempting to silence for many
          years. This issue brings together texts, artworks, and photographs from Daniil Russov{' '}
          <IssueTextImage image="sm2_daniil" />, Oleksii (Lesha) Berezovskiy{' '}
          <IssueTextImage image="sm2_lesha_berezovskiy" />, Livyj Bereh <IssueTextImage image="sm2_liviy_bereh" />,
          Alevtina Kakhidze <IssueTextImage image="sm2_alevtina" />, Max Tsukan, Oleksandr Naselenko, Oleksandra
          Kalinichenko and others. This issue created in Kyiv and designed in Berlin, is a testament to resistance
          through the means of art.
        </>
      )}
      {isThirdIssue && (
        <>
          The third issue of Solomiya is as desperate <IssueTextImage image="sm3_polovinko" /> as it is full of love,
          beauty, courage, and an unsettling longing for “a journey, an escape, and freedom,” as Yevhen, a young soldier
          from Odesa, puts it in War Dreams, a poignant series of portraits by Italian photographers Caimi&Piccini{' '}
          <IssueTextImage image="sm3_war_dreams" />. While raising thought-provoking questions about masculinity in war
          through the recent work of Vsevolod Kazarin <IssueTextImage image="sm3_vsevolod" />, Alex Mashtaler&rsquo;s
          yet unpublished photographs <IssueTextImage image="sm3_mashtaler" /> juxtapose the innocence of youth with the
          unforgiving harshness of reality - a reality shaped by Ukraine&rsquo;s colonial past and a present challenged
          by ongoing militarization. In interviews with editors of Solomiya, Asia Bazdyrieva{' '}
          <IssueTextImage image="sm3_bazdyrieva" />, Maxim Dondyuk <IssueTextImage image="sm3_dondyuk" />, and Henrike
          Naumann <IssueTextImage image="sm3_naumann" /> further explore these complexities through their own
          perspectives and artistic practices. While Ivanna Kozachenko and the artist collective Commercial Public Art
          <IssueTextImage image="sm3_cpa" /> dissect the spatial strategies of the architecture built by Russian forces
          in the occupied territories of Ukraine, the writings of Lucy Zoria <IssueTextImage image="sm3_zoria" /> and
          Sebastian Wells <IssueTextImage image="sm3_wells" /> offer diverse insights into the lived experiences of
          young Ukrainians abroad. The third issue was designed under the art direction Anne-Lene Proff and Peter
          Bünnagel of Kollektiv Scrollan and realized with the support of the Klaus-Stemmler-Foundation and Lessebo
          Paper distributed by IGEPA.
        </>
      )}
      {isFourthIssue && (
        <>
          The first monothematic issue of Solomiya—The Environmental Issue—brings together a collection of artists and
          researchers reflecting and advocating on behalf of Ukraine&rsquo;s more-than-human communities and ecologies.
          In collaboration with the Ukrainian Environmental Humanities Network (UEHN) — an international collective of
          curators, artists, and scholars—we&rsquo;ve created an issue that celebrates the richness and complexity of
          Ukrainian landscapes that is currently being threatened by the war. This issue offers a diverse range of
          perspectives, amplifying voices that challenge the colonial, imperial, and extractive narratives that have
          long shaped external perceptions of Ukraine&rsquo;s environment.
          <br />
          <br />
          Through written essays and visual works, the contributors take us on a journey across the country: from the
          Chornobyl Exclusion Zone in Polissya to the submerged ruins of the Kakhovka Dam in Kherson, from the vibrant
          wetlands of Odesa to the unique but threatened steppe. Shrinking rivers, displaced scientific collections,
          traditional ecological knowledge, nuclear legacies, and the scars of industrial agriculture are just a few of
          the urgent themes explored in this issue.
        </>
      )}
    </section>
  );
};
