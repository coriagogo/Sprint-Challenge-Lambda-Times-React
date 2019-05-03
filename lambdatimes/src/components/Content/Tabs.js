import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const TabsStyles = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsStyles>
      <TabsTopics>
        <TabsTitle><span>TRENDING TOPICS:</span></TabsTitle>
        {props.tabs.map(item => {
          return <Tab selectTabHandler = {props.selectTabHandler} selectedTab={props.selectedTab} tab={item} key={item} />;
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </TabsTopics>
    </TabsStyles>
  );
};

Tabs.propTypes = {
  tabs:PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
