'use client';
import React, { useState, useEffect } from 'react';
import AboutAuthor, { AboutAuthorProps } from './AboutAuthor';
import Reviews, { ReviewsProps } from './Reviews';
import Works, { WorksProps } from './Works';
import Contacts, { ContactsProps } from './Contacts';
import styles from './tab-panels.module.css';

interface TabPanelsData {
  [id: string]: React.ReactNode;
}

interface TabData {
  id: string;
  label: string;
  component: React.FC<
    AboutAuthorProps | ReviewsProps | WorksProps | ContactsProps
  >;
}

type TabsData = TabData[];

const data: TabsData = [
  {
    id: 'tab-1',
    label: 'Об авторе',
    component: AboutAuthor,
  },
  {
    id: 'tab-2',
    label: 'Отзывы',
    component: Reviews,
  },
  {
    id: 'tab-3',
    label: 'Работы',
    component: Works,
  },
  {
    id: 'tab-4',
    label: 'Контакты для связи',
    component: Contacts,
  },
];

const Tabs = () => {
  const [activeTabID, setActiveTabID] = useState(data[0].id);
  const [tabPanelsData, setTabPanelsData] = useState<TabPanelsData>({});

  const fetchTabContent = (tabId: string): Promise<object> => {
    return new Promise<object>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Иван Иванов',
          registrationDate: '2023-01-01',
          lastVisitDate: '2023-07-01',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui turpis, varius quis enim eget, porttitor porta nisi. Sed condimentum semper elit at facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis euismod nibh. Sed vulputate vitae mi iaculis efficitur. In vel orci in elit commodo bibendum nec varius dolor.',
        });
      }, 500);
    });
  };

  const changeTab = async (id: string) => {
    try {
      if (!tabPanelsData[id]) {
        const content = (await fetchTabContent(id)) as any;
        const currentItem = data.find((item) => item.id === id) as TabData;
        const Component = currentItem.component;

        setTabPanelsData((prevTabPanelsData) => ({
          ...prevTabPanelsData,
          [id]: <Component {...content} />,
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
              type="radio"
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
