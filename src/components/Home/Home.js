import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

class Home extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    searchString: PropTypes.node,
  }

  render() {
    const {title, subtitle, lists, searchString} = this.props;
    
    let view;
    if(searchString) {
      view = (
        <SearchResults />
      );
    } else {
      view = (
        lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))
      );
    }
    
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {view}
      </main>
    );
  }
}

export default Home;
