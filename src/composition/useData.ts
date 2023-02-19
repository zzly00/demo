import { reactive, readonly, onMounted } from 'vue';
import { DataState } from '../interface';

export default () => {
  const dataState: DataState = reactive({
    pageSize: 10,
    page: 1,
    totalPages: [],
    categoryValue: '0',
    categoryOptions: [
      {
        value: '0',
        label: 'HR Announcement',
      },
      {
        value: '1',
        label: 'News',
      },
      {
        value: '2',
        label: 'All Subtitle',
      }
    ],
    subtitleValue: '',
    lists: [
      {
        id: 1,
        title: '1 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 2,
        title: '2 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 3,
        title: '3 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 4,
        title: '4 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 5,
        title: '5 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 6,
        title: '6 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 7,
        title: '7 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 8,
        title: '8 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 9,
        title: '9 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 10,
        title: '10 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 11,
        title: '11 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 12,
        title: '12 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 13,
        title: '13 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 14,
        title: '14 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 15,
        title: '15 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 16,
        title: '16 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 17,
        title: '17 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 18,
        title: '18 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 19,
        title: '19 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 20,
        title: '20 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 21,
        title: '21 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 22,
        title: '22 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 23,
        title: '23 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 24,
        title: '24 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      },
      {
        id: 25,
        title: '25 APPX System New Version Release Announce on  14th Dec...',
        likes: 1,
        comments: 10,
        shares: 5,
        tag: 'News',
        date: 'Dec 19, 2022',
        remark: true
      }
    ],
  });

  const setTotalPages = () => {
    const totalPages = Math.ceil(dataState.lists.length / dataState.pageSize);
    dataState.totalPages =  Array.from({length: totalPages}, (_, i) => {
      return {
        value: i + 1,
        label: (i + 1).toString()
      }
    });
  };

  const setCategoryValue = (val: string) => {
    dataState.categoryValue = val;
  };

  const setSubtitleValue = (val: string) => {
    dataState.subtitleValue = val;
  };

  const setPageValue = (val: number) => {
    dataState.page = val;
  };

  const clickArrow = (val: string) => {
    const page = dataState.page;
    if (val === 'left' && page - 1 > 0) {
      dataState.page = page - 1;
    }

    const lastPage = dataState.totalPages[dataState.totalPages.length - 1].value;
    if (val === 'right' && page + 1 <= lastPage) {
      dataState.page = page + 1;
    }
  };

  const cancelRemark = (val: number) => {
    const item = dataState.lists.find(item => item.id === val);
    if (item) {
      item.remark = false;
    }
  };

  return {
    dataState: readonly(dataState),
    setTotalPages,
    setCategoryValue,
    setSubtitleValue,
    setPageValue,
    clickArrow,
    cancelRemark
  }
};