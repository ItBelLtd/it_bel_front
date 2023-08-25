'use client';
import React, { useState, useEffect } from 'react';
import About, { AboutProps } from './About';
import Works, { WorksProps } from './Works';
import Contacts, { ContactsProps } from './Contacts';
import styles from './tab-panels.module.css';
import { Info } from '@/models/User';

interface TabPanelsData {
  [id: string]: React.ReactNode;
}
interface TabData {
  id: string;
  label: string;
  component: React.FC<AboutProps | WorksProps | ContactsProps>;
}

type TabsContent = AboutProps | WorksProps | ContactsProps;
let data: TabData[] = [
  {
    id: 'tab-1',
    label: 'Об авторе',
    component: About,
  },
  {
    id: 'tab-2',
    label: 'Работы',
    component: Works,
  },
  {
    id: 'tab-3',
    label: 'Контакты для связи',
    component: Contacts,
  },
];

const Tabs = ({ info }: { info: Info }) => {
  const [activeTabID, setActiveTabID] = useState(data[0].id);
  const [tabPanelsData, setTabPanelsData] = useState<TabPanelsData>({});

  const changeTab = async (id: string) => {
    try {
      if (!tabPanelsData[id]) {
        const currentItem = data.find((item) => item.id === id) as TabData;
        const Component = currentItem.component;

        setTabPanelsData((prevTabPanelsData) => ({
          ...prevTabPanelsData,
          [id]: <Component info={info} />,
        }));
      }
    } catch (error) {
      console.error('Ошибка при загрузке контента вкладки', error);
    }
  };

  useEffect(() => {
    changeTab(activeTabID);
  }, []);

  const onChange = (id: string) => {
    setActiveTabID(id);
    changeTab(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {data.map(({ id, label }) => (
          <div key={id} className={styles.tab}>
            <input
              type='radio'
              id={id}
              className={styles.tabSwitch}
              checked={id === activeTabID}
              onClick={() => onChange(id)}
            />
            <label htmlFor={id} className={styles.tabLabel}>
              {label}
            </label>
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabPanelsData[activeTabID]}</div>
    </div>
  );
};

export default Tabs;
