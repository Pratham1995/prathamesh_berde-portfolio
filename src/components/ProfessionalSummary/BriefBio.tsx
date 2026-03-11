import InfoCard from '../common/InfoCard';
import summaryData from '../../data/professionalSummary.json';

const BriefBio = () => {
  return (
    summaryData.map((bio, index) => (
    <InfoCard key={index} icon={<span role="img" aria-label={bio.title}>{bio.icon}</span>} title={bio.title}>
      {bio.content}
    </InfoCard>
  )));
};

export default BriefBio;
