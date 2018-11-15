<template>

   <!-- 新增地址填写组件 -->
  <div class="root">
    <header class="header ElemeHeader-root_lOpLxr-_0">
        <div class="ElemeHeader-wrapper_2rUT4SE_0 ElemeHeader-gradientBg_3_Tu-JD_0 ElemeHeader-fixed_3OoT0dS_0" style="z-index: 8844;">
           <router-link to="/select">
             <div class="ElemeHeader-left_7jLVUf9_0">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" class="ElemeHeader-leftArrow_1PLBnDh_0" data-spm-anchor-id="a2ogi.12117550.0.i2">
             </div>
           </router-link>
             <h1 class="ElemeHeader-center_2hbxfGq_0">添加地址</h1>
        </div>
    </header>
    <div class="viewbody">
      <div data-v-11fa1732="" class="addressfrom">

   <!-- 信息填写栏 -->
        <div data-v-11fa1732="" class="content">

             <!-- 联系人 -->
            <div data-v-11fa1732="" class="formbloack username">
              <div data-v-11fa1732="" class="label-wrap">联系人</div>
                <div data-v-11fa1732="" class="input-group-wrap">
                  <div data-v-11fa1732="" class="input-wrap">
                    <input data-v-11fa1732="" placeholder="你的姓名" maxlength="20" v-model="username">
                    <!-- methods -->
                  </div>
                  <div data-v-11fa1732="" class="input-wrap bottom spans">
                      <span data-v-11fa1732="" class="form-span" >先生</span>
                      <span data-v-11fa1732="" class="form-span" >女士</span>
                  </div>
                </div>
            </div>

             <!-- 电话 -->
            <div data-v-11fa1732="" class="formbloack phone">
                  <div data-v-11fa1732="" class="label-wrap">电话 </div>
                       <div data-v-11fa1732="" class="input-group-wrap rightbtn">
                           <div data-v-11fa1732="" class="input-wrap">
                               <input data-v-11fa1732="" placeholder="你的手机号" type="tel" maxlength="20" v-model="iphone">
                           </div>
                       </div>
            </div>
             <!-- 地址与门牌号 -->

             <div data-v-11fa1732="" class="formbloack address" style="height:1vm;">
                     <div data-v-11fa1732="" class="label-wrap">
                       <p data-v-11fa1732="" class="">地址</p>
                       <p data-v-11fa1732="">门牌号</p>
                    </div>
                     <div data-v-11fa1732="" class="input-group-wrap">
                        <div data-v-11fa1732="" class="input-wrap top" style="height:1.5rem;">
                            <input data-v-11fa1732="" placeholder="小区/写字楼/学校等"  type="text" v-model="address">
                                <!-- <svg data-v-11fa1732="" style="height:1.5rem;"><use data-v-11fa1732="" xlink:href="#arrow-right"></use>
                                </svg> -->
                        </div>
                    <!---->
                        <div data-v-11fa1732="" class="input-wrap bottom" style="height:2rem;">
                            <textarea data-v-11fa1732="" rows="2" placeholder="10号楼5层501室" maxlength="100" v-model="numdoor"></textarea>
                            <svg data-v-11fa1732=""><use data-v-11fa1732="" xlink:href="#edit"></use></svg>
                             <!--  -->
                        </div>
                    </div>
            </div>

             <!-- 标签 -->
            <div data-v-11fa1732="" class="formbloack tags">
               <div data-v-11fa1732="" class="label-wrap">标签</div>
               <div data-v-11fa1732="" class="input-wrap spans">
                    <span data-v-11fa1732="" class="form-span"> 家</span>
                    <span data-v-11fa1732="" class="form-span">学校 </span>
                    <span data-v-11fa1732="" class="form-span">公司 </span>
               </div>
            </div>
        </div>

   <!-- 按钮 -->
         <div data-v-11fa1732="" class="form-button-wrap">
           <button data-v-11fa1732="" class="form-button" @click="add">保存并使用</button>
         </div>
    </div></div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld'
  data () {
    return {
      username: '',
      sex: '',
      iphone: '',
      address: '',
      numdoor: '',
      living: ''
    }
  },

  methods: {
    add () {
      this.$axios.get('http://localhost:3000/address', {
        params: {username: this.username,
          iphone: this.iphone,
          address: this.address,
          numdoor: this.numdoor}
      }).then(res => {
        var result = res.data
        if (result.code === 0) {
          alert('添加成功')
        } else {
          alert('添加失败', result.msg)
        }
      })
    }
  }
}
</script>
<style >
/*********** 公共属性 */
.root,body {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.formbloack[data-v-11fa1732] {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: -webkit-flex;
  display: flex;
}
.input-group-wrap[data-v-11fa1732] {
  -webkit-flex: 1;
  flex: 1;
}
.input-wrap[data-v-11fa1732] {
  -webkit-flex: 1 1 0;
  flex: 1 1 0;
  padding: 0.373333rem 0;
  padding: 3.733333vw 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
}
.formbloack .form-span .checked[data-v-11fa1732] {
    color: #2e3338;
    background: #eef7ff;
    border-color: rgba(35,149,255,.18);
}
.input-wrap[data-v-11fa1732] input[data-v-11fa1732],.formbloack textarea[data-v-11fa1732]{
  outline: none;
  font-size: 0.9rem;
  line-height: 0.48rem;
  line-height: 6.8vw;
  color: #666;
  border: none;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 0.4rem;
  padding-right: 4vw;
  padding-left: 0;
  -webkit-tap-highlight-color: transparent;
}
.formbloack[data-v-11fa1732] {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: -webkit-flex;
  display: flex;
}
.label-wrap[data-v-11fa1732] {
  -webkit-flex-basis: 1.733333rem;
  -webkit-flex-basis: 17.333333vw;
  flex-basis: 1.733333rem;
  flex-basis: 17.333333vw;
  padding: 0.373333rem 0;
  padding: 3.733333vw 0;
  font-size: 0.9rem;
  line-height: 0.48rem;
  line-height: 5.8vw;
  color: #333;
  font-weight: 700;
}
</style>

<style lang="scss" >
.root {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  .ElemeHeader-root_lOpLxr-_0 {
    height: 1.173333rem;
    height: 11.733333vw;
    .ElemeHeader-wrapper_2rUT4SE_0.ElemeHeader-fixed_3OoT0dS_0 {
      position: fixed;
      top: 0;
      left: 0;
    }
    .ElemeHeader-gradientBg_3_Tu-JD_0 {
      background-image: linear-gradient(90deg, #0af, #0085ff);
      .ElemeHeader-left_7jLVUf9_0 {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        width: 1.173333rem;
        width: 11.733333vw;
        height: 1.173333rem;
        height: 0.733333vw;
        .ElemeHeader-leftArrow_1PLBnDh_0 {
          width: 0.32rem;
          width: 3.2vw;
        }
        img {
          max-width: 100%;
        }
      }
    }
    .ElemeHeader-wrapper_2rUT4SE_0 {
      position: relative;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      width: 100%;
      height: 1.173333rem;
      height: 11.733333vw;
      color: #fff;
      font-size: 0.48rem;
      background: #2395ff;
      .ElemeHeader-center_2hbxfGq_0 {
        position: absolute;
        top: 0;
        left: 50%;
        height: 1.173333rem;
        height: 11.733333vw;
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        font-size: 2.3em;
        line-height: 1.173333rem;
        line-height: 11.733333vw;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  }
  .viewbody {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex-grow: 1;
    flex-grow: 1;

    // 姓名登记
    .addressfrom[data-v-11fa1732] {
      width: 100%;
      .content[data-v-11fa1732] {
        padding-left: 0.4rem;
        padding-left: 4vw;
        background: #fff;
        .formbloack[data-v-11fa1732]:first-child {
          border-top: 0.026667rem solid #eee;
          border-top: 0.266667vw solid #eee;
          .label-wrap[data-v-11fa1732] {
            -webkit-flex-basis: 1.733333rem;
            -webkit-flex-basis: 17.333333vw;
            flex-basis: 1.733333rem;
            flex-basis: 17.333333vw;
            padding: 0.373333rem 0;
            padding: 4.733333vw 0;
            //   font-size: .4rem;
            line-height: 0.48rem;
            line-height: 4.8vw;
            color: #333;
            font-weight: 700;
          }

          .input-wrap.bottom[data-v-11fa1732] {
            border-top: 1px solid #eee;
          }
          .spans[data-v-11fa1732] {
            padding: 0.266667rem 0;
            padding: 2.666667vw 0;
          }
          .input-wrap[data-v-11fa1732] {
            -webkit-flex: 1 1 0;
            flex: 1 1 0;
            padding: 0.373333rem 0;
            padding: 3.733333vw 0;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            .form-span[data-v-11fa1732] {
              background: #fff;
              border: 1px solid #ddd;
              border-radius: 0.106667rem;
              border-radius: 1.066667vw;
              font-size: 0.9rem;
              color: #666;
              line-height: 0.746667rem;
              line-height: 7.466667vw;
              width: 1.813333rem;
              width: 18.133333vw;
              margin-right: 0.266667rem;
              margin-right: 2.666667vw;
              text-align: center;
              -webkit-tap-highlight-color: transparent;
            }
          }
        }
      }
    }
  }

  // 电话
  // 地址门牌号
       .formbloack .label-wrap p[data-v-11fa1732]:first-child {
            margin-bottom: .8rem;
            margin-bottom: 8vw;
        }
        svg[data-v-11fa1732] {
            height: .506667rem;
            height: 5.066667vw;
            width: .48rem;
            width: 4.8vw;
            margin-right: .32rem;
            margin-right: 3.2vw;
        }
          bottom[data-v-11fa1732] {
            border-top: 1px solid #eee;
              textarea[data-v-11fa1732] {
                outline: none;
                font-size: 0.4rem;
                line-height: .48rem;
                line-height: 3.8vw;
                color: #666;
                border: none;
                -webkit-flex: 1;
                flex: 1;
                padding-right: .4rem;
                padding-right: 4vw;
                padding-left: 0;
                -webkit-tap-highlight-color: transparent;
            }
            svg[data-v-11fa1732] {
                height: .506667rem;
                height: 5.066667vw;
                width: .48rem;
                width: 4.8vw;
                margin-right: .32rem;
                margin-right: 3.2vw;
            }
        }

     //    标签
        .spans[data-v-11fa1732] {
            padding: .266667rem 0;
            padding: 2.666667vw 0;
             .form-span[data-v-11fa1732] {
                background: #fff;
                border: 1px solid #ddd;
                border-radius: .106667rem;
                border-radius: 1.066667vw;
                font-size: .9rem;
                color: #666;
                line-height: .746667rem;
                line-height: 7.466667vw;
                width: 1.813333rem;
                width: 18.133333vw;
                margin-right: .266667rem;
                margin-right: 2.666667vw;
                text-align: center;
                -webkit-tap-highlight-color: transparent;
            }
        }

        .form-button-wrap[data-v-11fa1732] {
            padding: .533333rem .4rem;
            padding: 5.333333vw 4vw;
            display: -webkit-flex;
            display: flex;
             .form-button[data-v-11fa1732] {
                background: #00d762;
                text-align: center;
                border-radius: .053333rem;
                border-radius: .533333vw;
                -webkit-flex: 1;
                flex: 1;
                font-size: .9rem;
                line-height: .506667rem;
                line-height: 5.066667vw;
                color: #fff;
                padding: .333333rem 0;
                padding: 3.333333vw 0;
                border: none;
                font-weight: 700;
                outline: none;
            }
        }
}
</style>
