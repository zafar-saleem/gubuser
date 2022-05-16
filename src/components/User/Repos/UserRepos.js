import { Button } from '../../';
import { StyledListItem } from './UserRepos.styled';

export const UserRepos = ({ data, updatePage, repos }) => {
  return (
    <section>
      <ul>
        {
          repos === 0
          ?
            <p>No repositories found</p>
          :
            data.map((item, index) => (
              <StyledListItem key={`${item.id}-${index}`}>
                <h2>{item.name}</h2>
                <p>
                  {
                    item.description || `Description not provided`
                  }
                </p>
              </StyledListItem>
            ))
        }
        {
          repos > 0 && (<Button triggerOperation={updatePage} label="Load more" color="#e7ebf1" fontColor="#121213" />)
        }
      </ul>
    </section>
  );
}