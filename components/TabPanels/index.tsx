'use client';
import React, { useState, useEffect } from 'react';
import AboutAuthor, { AboutAuthorProps } from './AboutAuthor';
import styles from './tab-panels.module.css';

interface TabData {
  [key: string]: React.ReactNode;
}

interface TabPanel {
  id: string;
  label: string;
  content: React.ReactNode;
  component: React.FC<AboutAuthorProps>;
}

const TabPanels = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [tabData, setTabData] = useState<TabData>({});

  const data: TabPanel[] = [
    {
      id: 'tab-1',
      label: 'Об авторе',
      content: '',
      component: AboutAuthor,
    },
    {
      id: 'tab-2',
      label: 'Отзывы',
      content: '',
      component: AboutAuthor,
    },
    {
      id: 'tab-3',
      label: 'Работы',
      content: '',
      component: AboutAuthor,
    },
    {
      id: 'tab-4',
      label: 'Контакты для связи',
      content: '',
      component: AboutAuthor,
    },
  ];

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

  useEffect(() => {
    const loadInitialTabContent = async () => {
      try {
        const content = (await fetchTabContent(
          activeTab,
        )) as AboutAuthorProps;
        setTabData((prevTabData) => ({
          ...prevTabData,
          [activeTab]: <AboutAuthor {...content} />,
        }));
      } catch (error) {
        console.error('Ошибка при загрузке контента вкладки', error);
      }
    };

    loadInitialTabContent();
  }, []);

  const onChange = async (key: string) => {
    setActiveTab(key);

    try {
      if (!tabData[key]) {
        const content = (await fetchTabContent(key)) as any;
        const currentItem = data.find(
          (item) => item.id === key,
        ) as TabPanel;
        const Component = currentItem.component;

        setTabData((prevTabData) => ({
          ...prevTabData,
          [key]: <Component {...content} />,
        }));
      }
    } catch (error) {
      console.error('Ошибка при загрузке контента вкладки', error);
    }
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
              checked={id === activeTab}
            />
            <label htmlFor={id} className={styles.tabLabel}>
              {label}
            </label>
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabData[activeTab]}</div>
    </div>
  );
};

export default TabPanels;
