<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import useData from '../composition/useData';
import { DataList } from '../interface';

const {
  dataState,
  setTotalPages,
  setCategoryValue,
  setSubtitleValue,
  setPageValue,
  clickArrow,
  cancelRemark
} = useData();

const filterList = computed(() => dataState.lists.filter((item: DataList) => item.remark));

const totalAmount = computed(() => filterList.value.length);

const lists = computed(() => filterList.value.slice((dataState.page - 1) * dataState.pageSize, dataState.page * dataState.pageSize));

const getIcon = (icon: string) => {
  return new URL(`../assets/${icon}.svg`, import.meta.url).href;
};

onMounted(() => {
  setTotalPages();
});
</script>

<template>
  <div class="my-collection">
    <div class="top-wrap">
      <div class="breadcrumb">
        <p class="breadcrumb-arrow">Home</p>
        <p class="active">My Collection</p>
      </div>
      <div class="search-bar">
        <div class="category">
          <p class="title">Category</p>
          <el-select v-model="dataState.categoryValue" placeholder="Select" @change="setCategoryValue">
          <el-option
            v-for="item in dataState.categoryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        </div>
        <div class="subtitle">
          <p class="title">Subtitle</p>
          <el-input v-model="dataState.subtitleValue" @input="setSubtitleValue"></el-input>
        </div>
        <button>Search</button>
      </div>
    </div>
    <div class="bottom-wrap">
      <div class="bar">
        <p class="title">My Collection</p>
        <div class="right-wrap">
          <p class="amount">Total {{ totalAmount }}</p>
          <div class="page-wrap">
            <i class="arrow left" @click="clickArrow('left')"></i>
            <el-select v-model="dataState.page" placeholder="Select" @change="setPageValue">
            <el-option
              v-for="item in dataState.totalPages"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
            <i class="arrow right" @click="clickArrow('right')"></i>
          </div>
        </div>
      </div>
      <div class="list">
        <div
          class="card"
          v-for="(item, index) in lists"
          :key="item.title + index"
        >
          <div class="left">
            <img :src="getIcon('remark')" @click="cancelRemark(item.id)" />
            <div class="info">
              <p class="title">{{ item.title }}</p>
              <div class="info-bottom">
                <div class="info-bottom-detail">
                  <img :src="getIcon('like')" />
                  <p>{{ item.likes }} Likes</p>
                </div>
                <div class="info-bottom-detail">
                  <img :src="getIcon('comment')" />
                  <p>{{ item.comments }} Comments</p>
                </div>
                <div class="info-bottom-detail">
                  <img :src="getIcon('share')" />
                  <p>{{ item.shares }} Shares</p>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <p class="tag">{{ item.tag }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-collection {
  width: 100%;
  height: 100vh;
  padding-right: 26px;
}
.top-wrap {
  margin-top: 16px;
  .breadcrumb {
    display: flex;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 30px;
      color: #737791;
    }
    .breadcrumb-arrow::after {
      content: '';
      border: solid #737791;
      border-width: 0px 1px 1px 0;
      display: inline-block;
      padding: 4px;
      margin: 0 16px;
      transform: rotate(-45deg);
    }
    .active {
      color: #121212;
    }
  }
  .search-bar {
    display: flex;
    align-items: flex-end;
    background: #FFFFFF;
    width: 100%;
    padding: 23px 0 26px 22px;
    .title {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #737791;
    }
    .category {
      margin-right: 16px;
    }
    .subtitle {
      margin-right: 16px;
      width: 248px;
    }
    :deep(.el-select) {
      width: 222px;
      height: 48px;
    }
    :deep(.el-input__wrapper) {
      width: 222px;
      height: 48px;
      border-radius: 8px;
      .el-input__inner {
        font-weight: 400;
        font-size: 18px;
        color: #151D48 !important;
      }
    }
    button {
      padding: 2px 16px;
      height: 48px;
      background: #F2F2F7;
      border: 1px solid #F2F2F7;
      border-radius: 8px;
      font-size: 18px;
      color: #32395F;
    }
  }
}
.bottom-wrap {
  margin-top: 28px;
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #11263C;
  }
  .amount {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #737791;
    margin-right: 26px;
  }
  .right-wrap {
    display: flex;
    align-items: center;
  }
  .page-wrap {
    display: flex;
    align-items: center;
    .arrow {
      border: solid #151D48;
      border-width: 0px 2px 2px 0;
      display: inline-block;
      padding: 4px;
      cursor: pointer;
    }
    .right {
      transform: rotate(-45deg);
      margin-left: 21px;
    }
    .left {
      transform: rotate(135deg);
      margin-right: 21px;
    }
    :deep(.el-select) {
      width: 55px;
    }
    :deep(.el-input__wrapper) {
      width: 55px;
      border-radius: 8px;
      .el-input__inner {
        font-weight: 400;
        font-size: 14px;
        color: #151D48 !important;
      }
    }
  }
  .list {
    margin-top: 14px;
    overflow-y: scroll;
    height: calc(100vh - 360px);
    .card {
      display: flex;
      justify-content: space-between;
      background: #FFFFFF;
      border: 1px solid #D5D5DA;
      width: 100%;
      padding: 15px 26px 16px 15px;
      .left {
        display: flex;
        > img {
          cursor: pointer;
          margin-right: 22px;
          position: relative;
          top: -15px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        .title {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #11263C;
        }
      }
      .info-bottom {
        display: flex;
      }
      .info-bottom-detail {
        display: flex;
        align-items: center;
        margin-top: 13.34px;
        margin-right: 25.48px;
        > img {
          margin-right: 7.74px;
        }
        p {
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #737791;
        }
      }
      .right {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #737791;
        .tag {
          width: fit-content;
          margin-bottom: 13.56px;
          padding: 2px 8px;
          background: #EDEDED;
          border-radius: 38px;
          color: #11263C;
        }
      }
    }
  }
}
</style>
