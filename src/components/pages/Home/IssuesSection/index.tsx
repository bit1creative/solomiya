import { useIssueMatch } from 'Hooks/useIssueMatch';

import { IssueTextImage } from './IssueTextImage';

export const IssuesSection = () => {
  if (useIssueMatch('1')) {
    return (
      <section className="snap-start px-4 text-center font-nice-regular text-3xl">
        In Solomiya&apos;s very first issue, you will encounter some of those who grew up in an independent Ukraine and
        are paying a huge price for the European integration they seek. We invite you to meet young creatives from Kyiv
        and elsewhere who write <IssueTextImage image="sm1_andrii" />
        <IssueTextImage image="sm1_vsevolod" />, create <IssueTextImage image="sm1_christina" />
        <IssueTextImage image="sm1_sonya" /> and don&rsquo;t stop self-expressing their identities through their fashion{' '}
        <IssueTextImage image="sm1_portraits" />. Further, we show for the first time brandnew works by Sasha Kurmaz{' '}
        <IssueTextImage image="sm1_kurmaz" />, who also created the cover motif <IssueTextImage image="sm1_cover" />.
        While Mykola Ridnyi&apos;s iconic series &quot;Blindspot&quot; <IssueTextImage image="sm1_ridnyi" /> recalls the
        beginning of the Russian invasion of Ukraine in 2014, a protocol traces the lives of two young inhabitants from
        Bucha who survived the Russian occupation in 2022 <IssueTextImage image="sm1_bucha" />.
      </section>
    );
  }
};
