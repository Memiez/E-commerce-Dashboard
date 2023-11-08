<template>
  <div :class="$style.dashboard">
    <div :class="$style.sidemenuLarge">
      <div :class="$style.container">
        <img :class="$style.logoIcon" alt="" src="/logo.svg" />
        <div :class="$style.line" />
        <div :class="$style.container1">
          <div :class="$style.overview">
            <div :class="$style.container2">
              <img
                :class="$style.squaresfourIcon"
                alt=""
                src="/squaresfour.svg"
              />
              <b :class="$style.jan">Dashboard</b>
            </div>
          </div>
        </div>
        <div :class="$style.sharedFiles">
          <div :class="$style.analytics">Analytics</div>
          <div :class="$style.sharedFolder">
            <img :class="$style.squaresfourIcon" alt="" src="/chartbar.svg" />
            <div :class="$style.performance">Performance</div>
          </div>
          <div :class="$style.sharedFolder">
            <img
              :class="$style.squaresfourIcon"
              alt=""
              src="/cursorclick.svg"
            />
            <div :class="$style.performance">Hotjar</div>
          </div>
        </div>
        <div :class="$style.line1" />
        <div :class="$style.sharedFiles">
          <div :class="$style.analytics">SUPPORT</div>
          <div :class="$style.sharedFolder">
            <img :class="$style.squaresfourIcon" alt="" src="/ticket.svg" />
            <div :class="$style.performance">Tickets</div>
          </div>
          <div :class="$style.sharedFolder">
            <img :class="$style.squaresfourIcon" alt="" src="/user.svg" />
            <div :class="$style.performance">Agents</div>
          </div>
          <div :class="$style.sharedFolder">
            <img :class="$style.squaresfourIcon" alt="" src="/users.svg" />
            <div :class="$style.performance">Customers</div>
          </div>
        </div>
        <div :class="$style.line1" />
        <div :class="$style.sharedFiles">
          <div :class="$style.analytics">Shop</div>
          <div :class="$style.sharedFolder">
            <img :class="$style.squaresfourIcon" alt="" src="/cube.svg" />
            <div :class="$style.performance">Products</div>
          </div>
          <div :class="$style.sharedFolder">
            <img
              :class="$style.squaresfourIcon"
              alt=""
              src="/shoppingcartsimple.svg"
            />
            <div :class="$style.performance">Orders</div>
          </div>
          <div :class="$style.sharedFolder">
            <img :class="$style.squaresfourIcon" alt="" src="/file.svg" />
            <div :class="$style.performance">Reports</div>
          </div>
        </div>
        <div :class="$style.line1" />
        <div :class="$style.darkMode">
          <div :class="$style.darkMode1">
            <img :class="$style.squaresfourIcon" alt="" src="/moon.svg" />
            <div :class="$style.performance">Dark Mode</div>
          </div>
          <img :class="$style.buttonIcon" alt="" src="/button.svg" />
        </div>
      </div>
      <div :class="$style.sharedFiles">
        <div :class="$style.sharedFolder">
          <img :class="$style.squaresfourIcon" alt="" src="/gear.svg" />
          <div :class="$style.performance">Settings</div>
        </div>
        <div :class="$style.sharedFolder">
          <img :class="$style.squaresfourIcon" alt="" src="/signout.svg" />
          <div :class="$style.performance">Log Out</div>
        </div>
      </div>
    </div>
    <div :class="$style.topBar">
      <div :class="$style.searchField">
        <img
          :class="$style.magnifyingglassIcon"
          alt=""
          src="/magnifyingglass.svg"
        />
        <div :class="$style.performance">Search for file, folder, etc...</div>
      </div>
      <div :class="$style.container4">
        <img :class="$style.magnifyingglassIcon" alt="" src="/question.svg" />
        <img :class="$style.magnifyingglassIcon" alt="" src="/gear1.svg" />
        <img :class="$style.magnifyingglassIcon" alt="" src="/bell.svg" />
        <div :class="$style.user">
          <img
            :class="$style.profilePictureIcon"
            alt=""
            src="/profile-picture@2x.png"
          />
          <div :class="$style.name">
            <b :class="$style.performance">Wade Warren</b>
            <div :class="$style.wadewarrenmailcom">wade.warren@mail.com</div>
          </div>
          <img
            :class="$style.magnifyingglassIcon"
            alt=""
            src="/caretdown.svg"
          />
        </div>
      </div>
    </div>
    <div :class="$style.customers1">
      <div :class="$style.customers2">Customers</div>
      <div :class="$style.frameParent">
        <div :class="$style.wrapper">
          <b :class="$style.b">23,543</b>
        </div>
        <div :class="$style.parent">
          <div :class="$style.performance">34.3%</div>
          <img :class="$style.arrowrightIcon" alt="" src="/arrowright.svg" />
        </div>
      </div>
      <div :class="$style.usersParent">
        <img :class="$style.magnifyingglassIcon" alt="" src="/users1.svg" />
        <div :class="$style.impressions">Customers</div>
      </div>
      <div :class="$style.chart">
        <div :class="$style.chartChild" />
        <div :class="$style.chartItem" />
        <div :class="$style.chartInner" />
        <div :class="$style.rectangleDiv" />
        <div :class="$style.chartChild1" />
        <div :class="$style.chartChild2" />
      </div>
    </div>
    <div :class="$style.customers3">
      <div :class="$style.customers2">Customers</div>
      <div :class="$style.frameParent">
        <div :class="$style.wrapper">
          <b :class="$style.b">23,543</b>
        </div>
        <div :class="$style.parent">
          <div :class="$style.performance">34.3%</div>
          <img :class="$style.arrowrightIcon" alt="" src="/arrowright1.svg" />
        </div>
      </div>
      <div :class="$style.usersParent">
        <img :class="$style.magnifyingglassIcon" alt="" src="/users2.svg" />
        <div :class="$style.impressions">Customers</div>
      </div>
      <div :class="$style.chart">
        <div :class="$style.chartChild" />
        <div :class="$style.chartItem" />
        <div :class="$style.chartInner" />
        <div :class="$style.rectangleDiv" />
        <div :class="$style.chartChild1" />
        <div :class="$style.chartChild2" />
      </div>
    </div>
    <div :class="$style.customerGrowth">
      <b :class="$style.overallSales">Customer Growth</b>
      <div :class="$style.dropdown">
        <div :class="$style.performance">Current Year</div>
        <img :class="$style.squaresfourIcon" alt="" src="/caretdown1.svg" />
      </div>
      <div :class="$style.frameDiv">
        <div :class="$style.performance">250</div>
        <div :class="$style.performance">200</div>
        <div :class="$style.performance">150</div>
        <div :class="$style.performance">100</div>
        <div :class="$style.performance">50</div>
        <div :class="$style.performance">0</div>
      </div>
      <div :class="$style.janParent">
        <div :class="$style.jan">Jan</div>
        <div :class="$style.feb">Feb</div>
        <div :class="$style.feb">Mar</div>
        <div :class="$style.jan">Apr</div>
        <div :class="$style.jan">May</div>
        <div :class="$style.jan">Jun</div>
        <div :class="$style.jan">Jul</div>
        <div :class="$style.jan">Aug</div>
        <div :class="$style.jan">Sep</div>
        <div :class="$style.jan">Oct</div>
        <div :class="$style.jan">Nov</div>
        <div :class="$style.jan">Dec</div>
      </div>
      <div :class="$style.customerGrowthChild" />
      <div :class="$style.customerGrowthItem" />
      <div :class="$style.customerGrowthInner" />
      <div :class="$style.lineDiv" />
      <div :class="$style.customerGrowthChild1" />
      <div :class="$style.customerGrowthChild2" />
      <div :class="$style.vectorParent">
        <img :class="$style.vectorIcon" alt="" src="/vector.svg" />
        <img :class="$style.vectorIcon1" alt="" src="/vector1.svg" />
        <div :class="$style.frameChild" />
        <div :class="$style.frameWrapper">
          <div :class="$style.totalCustomerParent">
            <div :class="$style.jan">Total Customer</div>
            <b :class="$style.b2">179</b>
          </div>
        </div>
        <div :class="$style.frameItem" />
      </div>
    </div>
    <div :class="$style.userLocations">
      <img :class="$style.infoIcon" alt="" src="/info.svg" />
      <b :class="$style.contracts">User Locations</b>
      <div :class="$style.past7Days">Past 7 Days</div>
      <div :class="$style.groupParent">
        <img :class="$style.frameInner" alt="" src="/group-10.svg" />
        <div :class="$style.ellipseDiv" />
        <div :class="$style.frameContainer">
          <div :class="$style.frameParent1">
            <img :class="$style.frameIcon" alt="" src="/frame-113.svg" />
            <div :class="$style.usa">USA</div>
          </div>
          <div :class="$style.div8">12,474</div>
        </div>
        <div :class="$style.plusParent">
          <img :class="$style.plusIcon" alt="" src="/plus.svg" />
          <div :class="$style.frameChild1" />
          <img :class="$style.plusIcon" alt="" src="/minus.svg" />
        </div>
      </div>
    </div>
    <div :class="$style.recentSales">
      <b :class="$style.recentSales1">Recent Sales</b>
      <div :class="$style.dropdown1">
        <div :class="$style.performance">Filter</div>
        <img :class="$style.squaresfourIcon" alt="" src="/funnel.svg" />
      </div>
      <div :class="$style.div9">#</div>
      <div :class="$style.customerId">Customer ID</div>
      <div :class="$style.customerName">Customer Name</div>
      <div :class="$style.itemName">Item Name</div>
      <div :class="$style.orderDate">Order Date</div>
      <div :class="$style.status">Status</div>
      <div :class="$style.price">Price</div>
      <div :class="$style.div10">01</div>
      <div :class="$style.div11">02</div>
      <div :class="$style.div12">03</div>
      <div :class="$style.div13">04</div>
      <div :class="$style.div14">04</div>
      <div :class="$style.div15">#897632</div>
      <div :class="$style.div16">#345782</div>
      <div :class="$style.div17">#653216</div>
      <div :class="$style.div18">#562334</div>
      <div :class="$style.div19">#897865</div>
      <div :class="$style.ellipseParent">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-5@2x.png" />
        <div :class="$style.performance">Cameron Williamson</div>
      </div>
      <div :class="$style.ellipseGroup">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-51@2x.png" />
        <div :class="$style.performance">Brooklyn Simmons</div>
      </div>
      <div :class="$style.ellipseContainer">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-52@2x.png" />
        <div :class="$style.performance">Jenny Wilson</div>
      </div>
      <div :class="$style.ellipseParent1">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-52@2x.png" />
        <div :class="$style.performance">Robert Fox</div>
      </div>
      <div :class="$style.ellipseParent2">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-52@2x.png" />
        <div :class="$style.performance">Jacob Jones</div>
      </div>
      <div :class="$style.ellipseParent3">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-6@2x.png" />
        <div :class="$style.performance">1x iPhone Cover</div>
      </div>
      <div :class="$style.ellipseParent4">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-61@2x.png" />
        <div :class="$style.performance">1x Camera</div>
      </div>
      <div :class="$style.ellipseParent5">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-52@2x.png" />
        <div :class="$style.performance">1x Gamepad</div>
      </div>
      <div :class="$style.ellipseParent6">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-52@2x.png" />
        <div :class="$style.performance">1x Watch</div>
      </div>
      <div :class="$style.ellipseParent7">
        <img :class="$style.ellipseIcon" alt="" src="/ellipse-52@2x.png" />
        <div :class="$style.performance">1x Controller</div>
      </div>
      <div :class="$style.div20">21/05/2023 09:31</div>
      <div :class="$style.div21">23/06/2023 05:21</div>
      <div :class="$style.div22">12/02/2022 02:12</div>
      <div :class="$style.div23">24/02/2022 11:00</div>
      <div :class="$style.div24">17/08/2022 12:31</div>
      <div :class="$style.paidWrapper">
        <div :class="$style.usa">Paid</div>
      </div>
      <div :class="$style.pendingWrapper">
        <div :class="$style.usa">Pending</div>
      </div>
      <div :class="$style.pendingContainer">
        <div :class="$style.usa">Pending</div>
      </div>
      <div :class="$style.paidContainer">
        <div :class="$style.usa">Paid</div>
      </div>
      <div :class="$style.cancelWrapper">
        <div :class="$style.usa">Cancel</div>
      </div>
      <div :class="$style.div25">$20</div>
      <div :class="$style.div26">$300</div>
      <div :class="$style.div27">$450</div>
      <div :class="$style.div28">$125</div>
      <div :class="$style.div29">$230</div>
      <div :class="$style.recentSalesChild" />
      <div :class="$style.recentSalesItem" />
      <div :class="$style.recentSalesInner" />
      <div :class="$style.recentSalesChild1" />
      <div :class="$style.recentSalesChild2" />
      <div :class="$style.pagination">
        <div :class="$style.button">
          <div :class="$style.buttonBase">
            <img :class="$style.plusIcon" alt="" src="/arrowleft.svg" />
            <div :class="$style.usa">Previous</div>
          </div>
        </div>
        <div :class="$style.paginationNumbers">
          <div :class="$style.paginationNumberBase">
            <div :class="$style.content">
              <div :class="$style.usa">1</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content">
              <div :class="$style.usa">2</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content">
              <div :class="$style.usa">3</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content">
              <div :class="$style.usa">...</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content">
              <div :class="$style.usa">8</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content">
              <div :class="$style.usa">9</div>
            </div>
          </div>
          <div :class="$style.paginationNumberBase1">
            <div :class="$style.content">
              <div :class="$style.usa">10</div>
            </div>
          </div>
        </div>
        <div :class="$style.button1">
          <div :class="$style.buttonBase">
            <div :class="$style.usa">Next</div>
            <img :class="$style.plusIcon" alt="" src="/arrowleft.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Dashboard",
  });
</script>
<style module>
  .logoIcon {
    position: relative;
    width: 161.41px;
    height: 36.3px;
  }
  .line {
    position: relative;
    border-top: 1px solid var(--grey-100);
    box-sizing: border-box;
    width: 197px;
    height: 1px;
  }
  .squaresfourIcon {
    position: relative;
    width: 20px;
    height: 20px;
  }
  .container2 {
    position: absolute;
    top: calc(50% - 9.3px);
    left: 14.8px;
    width: 94px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .overview {
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--primary-0);
    width: 227px;
    height: 46px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .container1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--primary-500);
  }
  .analytics {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-3xs);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--grey-400);
  }
  .performance {
    position: relative;
    line-height: 140%;
  }
  .sharedFolder {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .sharedFiles {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .line1 {
    align-self: stretch;
    position: relative;
    border-top: 1px solid var(--grey-100);
    box-sizing: border-box;
    height: 1px;
  }
  .darkMode1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .buttonIcon {
    position: relative;
    border-radius: var(--br-11xl);
    width: 40px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .darkMode {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-36xl);
  }
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-9xl);
  }
  .sidemenuLarge {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--white);
    width: 251px;
    height: 1024px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-13xl) var(--padding-5xl);
    box-sizing: border-box;
    color: var(--grey-600);
  }
  .magnifyingglassIcon {
    position: relative;
    width: 24px;
    height: 24px;
  }
  .searchField {
    border-radius: var(--br-xs);
    background-color: var(--grey-100);
    width: 432px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-sm);
  }
  .profilePictureIcon {
    position: relative;
    border-radius: var(--br-21xl);
    width: 44px;
    height: 44px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .wadewarrenmailcom {
    position: relative;
    font-size: var(--b3-regular-size);
    line-height: 140%;
    color: var(--grey-500);
  }
  .name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .container4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--b1-medium-size);
    color: var(--grey-900);
  }
  .topBar {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: var(--white);
    border-left: 1px solid var(--grey-100);
    box-sizing: border-box;
    width: 1188px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xl) var(--padding-17xl);
  }
  .customers2 {
    position: absolute;
    top: 98px;
    left: 32px;
    line-height: 140%;
    display: none;
  }
  .b {
    position: relative;
    letter-spacing: -0.05em;
    line-height: 100%;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .arrowrightIcon {
    position: relative;
    width: 14px;
    height: 14px;
  }
  .parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xs);
    font-size: var(--b1-medium-size);
    color: var(--green-500);
  }
  .frameParent {
    position: absolute;
    top: 77px;
    left: 27px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    font-size: var(--h2-bold-size);
    color: var(--grey-900);
  }
  .impressions {
    position: relative;
    line-height: 120%;
    font-weight: 500;
  }
  .usersParent {
    position: absolute;
    top: 24px;
    left: 27px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    font-size: var(--h4-bold-size);
  }
  .chartChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 8.08px 8.08px 0px 0px;
    background-color: var(--primary-500);
    width: 11px;
    height: 91px;
  }
  .chartItem {
    position: absolute;
    top: 27px;
    left: 21px;
    border-radius: 8.08px 8.08px 0px 0px;
    background-color: var(--primary-200);
    width: 12px;
    height: 64px;
  }
  .chartInner {
    position: absolute;
    top: 17px;
    left: 43px;
    border-radius: 8.08px 8.08px 0px 0px;
    background-color: var(--primary-200);
    width: 11px;
    height: 74px;
  }
  .rectangleDiv {
    position: absolute;
    top: 63px;
    left: 64px;
    border-radius: 8.08px 8.08px 0px 0px;
    background-color: var(--primary-500);
    width: 11px;
    height: 28px;
  }
  .chartChild1 {
    position: absolute;
    top: 42px;
    left: 85px;
    border-radius: 8.08px 8.08px 0px 0px;
    background-color: var(--primary-500);
    width: 12px;
    height: 49px;
  }
  .chartChild2 {
    position: absolute;
    top: 6px;
    left: 107px;
    border-radius: 8.08px 8.08px 0px 0px;
    background-color: var(--primary-200);
    width: 11px;
    height: 85px;
  }
  .chart {
    position: absolute;
    top: 48px;
    left: 211px;
    width: 118px;
    height: 90.52px;
  }
  .customers1 {
    position: absolute;
    height: 16.02%;
    width: 24.72%;
    top: 12.11%;
    right: 55.35%;
    bottom: 71.88%;
    left: 19.93%;
    border-radius: var(--br-base);
    background-color: var(--white);
    overflow: hidden;
    font-size: var(--b1-medium-size);
    color: var(--grey-500);
  }
  .customers3 {
    position: absolute;
    height: 16.02%;
    width: 24.72%;
    top: 12.11%;
    right: 29.03%;
    bottom: 71.88%;
    left: 46.25%;
    border-radius: var(--br-base);
    background-color: var(--white);
    overflow: hidden;
    font-size: var(--b1-medium-size);
    color: var(--grey-500);
  }
  .overallSales {
    position: absolute;
    top: 29px;
    left: 31px;
    font-size: var(--h3-bold-size);
    line-height: 120%;
    color: var(--grey-900);
  }
  .dropdown {
    position: absolute;
    top: 22px;
    left: 558px;
    border-radius: var(--br-xs);
    border: 1px solid var(--grey-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-base);
    gap: var(--gap-3xs);
  }
  .frameDiv {
    position: absolute;
    top: 91px;
    left: 31px;
    height: 234px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    text-align: right;
  }
  .jan {
    position: relative;
  }
  .feb {
    position: relative;
    font-family: var(--font-satoshi);
  }
  .janParent {
    position: absolute;
    top: 332px;
    left: 93px;
    width: 611px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: right;
  }
  .customerGrowthChild {
    position: absolute;
    top: 100.5px;
    left: 74.5px;
    border-top: 1px dashed var(--grey-200);
    box-sizing: border-box;
    width: 630px;
    height: 1px;
  }
  .customerGrowthItem {
    position: absolute;
    top: 143.5px;
    left: 74.5px;
    border-top: 1px dashed var(--grey-200);
    box-sizing: border-box;
    width: 630px;
    height: 1px;
  }
  .customerGrowthInner {
    position: absolute;
    top: 186.5px;
    left: 74.5px;
    border-top: 1px dashed var(--grey-200);
    box-sizing: border-box;
    width: 630px;
    height: 1px;
  }
  .lineDiv {
    position: absolute;
    top: 229.5px;
    left: 74.5px;
    border-top: 1px dashed var(--grey-200);
    box-sizing: border-box;
    width: 630px;
    height: 1px;
  }
  .customerGrowthChild1 {
    position: absolute;
    top: 272.5px;
    left: 74.5px;
    border-top: 1px dashed var(--grey-200);
    box-sizing: border-box;
    width: 630px;
    height: 1px;
  }
  .customerGrowthChild2 {
    position: absolute;
    top: 315.5px;
    left: 74.5px;
    border-top: 1px dashed var(--grey-200);
    box-sizing: border-box;
    width: 630px;
    height: 1px;
  }
  .vectorIcon {
    position: absolute;
    top: 30px;
    left: 0px;
    width: 629px;
    height: 195px;
  }
  .vectorIcon1 {
    position: absolute;
    top: 28.5px;
    left: 0px;
    width: 629px;
    height: 193px;
  }
  .frameChild {
    position: absolute;
    top: 29px;
    left: 268px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
      180deg,
      rgba(31, 125, 255, 0),
      rgba(0, 106, 255, 0.25)
    );
    width: 53px;
    height: 196px;
  }
  .b2 {
    position: relative;
    font-size: var(--b1-medium-size);
    color: var(--grey-900);
  }
  .totalCustomerParent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .frameWrapper {
    position: absolute;
    top: -5px;
    left: 244px;
    border-radius: var(--br-3xs);
    background-color: var(--white);
    box-shadow: 0px 10px 40px rgba(153, 153, 153, 0.25);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-sm);
  }
  .frameItem {
    position: absolute;
    top: 58px;
    left: 284px;
    border-radius: 50%;
    background-color: var(--primary-500);
    box-shadow: 0px 10px 20px rgba(53, 133, 139, 0.25);
    border: 4px solid var(--white);
    box-sizing: border-box;
    width: 21px;
    height: 21px;
  }
  .vectorParent {
    position: absolute;
    top: 91px;
    left: 75px;
    width: 629px;
    height: 225px;
    overflow: hidden;
    font-size: var(--font-size-3xs);
  }
  .customerGrowth {
    position: absolute;
    top: 312px;
    left: 287px;
    border-radius: var(--br-base);
    background-color: var(--white);
    width: 735px;
    height: 380px;
    overflow: hidden;
  }
  .infoIcon {
    position: absolute;
    top: 28px;
    left: 306px;
    width: 24px;
    height: 24px;
  }
  .contracts {
    position: absolute;
    top: 28px;
    left: 28px;
    line-height: 120%;
  }
  .past7Days {
    position: absolute;
    top: 56px;
    left: 28px;
    font-size: var(--b1-medium-size);
    line-height: 140%;
    color: var(--grey-500);
  }
  .frameInner {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1012.41px;
    height: 499px;
  }
  .ellipseDiv {
    position: absolute;
    top: 154px;
    left: 84px;
    border-radius: 50%;
    background-color: var(--white);
    border: 6px solid var(--color-gray-100);
    box-sizing: border-box;
    width: 26px;
    height: 26px;
  }
  .frameIcon {
    position: relative;
    width: 22px;
    height: 15.71px;
  }
  .usa {
    position: relative;
    line-height: 140%;
    font-weight: 500;
  }
  .frameParent1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .div8 {
    position: relative;
    line-height: 140%;
    font-weight: 500;
    text-align: right;
  }
  .frameContainer {
    position: absolute;
    top: 108px;
    left: 28px;
    border-radius: var(--br-5xs);
    background-color: var(--white);
    box-shadow: 0px 7px 16px rgba(53, 66, 85, 0.24);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .plusIcon {
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .frameChild1 {
    align-self: stretch;
    position: relative;
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    height: 1px;
  }
  .plusParent {
    position: absolute;
    top: 365px;
    left: 292px;
    border-radius: var(--br-5xs);
    background-color: var(--white);
    box-shadow: 0px 7px 16px rgba(53, 66, 85, 0.24);
    height: 71px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-5xs);
    box-sizing: border-box;
  }
  .groupParent {
    position: absolute;
    top: 104px;
    left: 0px;
    width: 360px;
    height: 464px;
    overflow: hidden;
    font-size: var(--text-sm-medium-size);
  }
  .userLocations {
    position: absolute;
    top: 124px;
    left: 1048px;
    border-radius: var(--br-base);
    background-color: var(--white);
    width: 356px;
    height: 568px;
    overflow: hidden;
    font-size: var(--h4-bold-size);
    color: var(--grey-900);
  }
  .recentSales1 {
    position: absolute;
    top: 35px;
    left: 36px;
    font-size: var(--h3-bold-size);
    line-height: 120%;
  }
  .dropdown1 {
    position: absolute;
    top: 28px;
    left: 976px;
    border-radius: var(--br-xs);
    border: 1px solid var(--grey-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-base);
    gap: var(--gap-base);
    text-align: right;
    font-size: var(--text-sm-medium-size);
    color: var(--grey-300);
  }
  .div9 {
    position: absolute;
    top: 96px;
    left: 36px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .customerId {
    position: absolute;
    top: 96px;
    left: 94px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .customerName {
    position: absolute;
    top: 96px;
    left: 228px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .itemName {
    position: absolute;
    top: 96px;
    left: 476px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .orderDate {
    position: absolute;
    top: 96px;
    left: 692px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .status {
    position: absolute;
    top: 96px;
    left: 892px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .price {
    position: absolute;
    top: 96px;
    left: 1039px;
    line-height: 140%;
    color: var(--grey-300);
  }
  .div10 {
    position: absolute;
    top: 172px;
    left: 36px;
    line-height: 140%;
  }
  .div11 {
    position: absolute;
    top: 254px;
    left: 36px;
    line-height: 140%;
  }
  .div12 {
    position: absolute;
    top: 336px;
    left: 36px;
    line-height: 140%;
  }
  .div13 {
    position: absolute;
    top: 418px;
    left: 36px;
    line-height: 140%;
  }
  .div14 {
    position: absolute;
    top: 500px;
    left: 36px;
    line-height: 140%;
  }
  .div15 {
    position: absolute;
    top: 172px;
    left: 94px;
    line-height: 140%;
  }
  .div16 {
    position: absolute;
    top: 254px;
    left: 94px;
    line-height: 140%;
  }
  .div17 {
    position: absolute;
    top: 336px;
    left: 94px;
    line-height: 140%;
  }
  .div18 {
    position: absolute;
    top: 418px;
    left: 94px;
    line-height: 140%;
  }
  .div19 {
    position: absolute;
    top: 500px;
    left: 94px;
    line-height: 140%;
  }
  .ellipseIcon {
    position: relative;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  .ellipseParent {
    position: absolute;
    top: 168px;
    left: 228px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseGroup {
    position: absolute;
    top: 250px;
    left: 228px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseContainer {
    position: absolute;
    top: 332px;
    left: 228px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent1 {
    position: absolute;
    top: 414px;
    left: 228px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent2 {
    position: absolute;
    top: 496px;
    left: 228px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent3 {
    position: absolute;
    top: 168px;
    left: 476px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent4 {
    position: absolute;
    top: 250px;
    left: 476px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent5 {
    position: absolute;
    top: 332px;
    left: 476px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent6 {
    position: absolute;
    top: 414px;
    left: 476px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .ellipseParent7 {
    position: absolute;
    top: 496px;
    left: 476px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .div20 {
    position: absolute;
    top: 172px;
    left: 692px;
    line-height: 140%;
  }
  .div21 {
    position: absolute;
    top: 254px;
    left: 692px;
    line-height: 140%;
  }
  .div22 {
    position: absolute;
    top: 336px;
    left: 692px;
    line-height: 140%;
  }
  .div23 {
    position: absolute;
    top: 418px;
    left: 692px;
    line-height: 140%;
  }
  .div24 {
    position: absolute;
    top: 500px;
    left: 692px;
    line-height: 140%;
  }
  .paidWrapper {
    position: absolute;
    top: 166px;
    left: 892px;
    border-radius: var(--br-11xl);
    background-color: var(--green-100);
    width: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) var(--padding-3xs);
    box-sizing: border-box;
    color: var(--green-600);
  }
  .pendingWrapper {
    position: absolute;
    top: 248px;
    left: 892px;
    border-radius: var(--br-11xl);
    background-color: var(--yellow-100);
    width: 101px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) var(--padding-3xs);
    box-sizing: border-box;
    color: var(--yellow-600);
  }
  .pendingContainer {
    position: absolute;
    top: 330px;
    left: 892px;
    border-radius: var(--br-11xl);
    background-color: var(--yellow-100);
    width: 101px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) var(--padding-3xs);
    box-sizing: border-box;
    color: var(--yellow-600);
  }
  .paidContainer {
    position: absolute;
    top: 412px;
    left: 892px;
    border-radius: var(--br-11xl);
    background-color: var(--green-100);
    width: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) var(--padding-3xs);
    box-sizing: border-box;
    color: var(--green-600);
  }
  .cancelWrapper {
    position: absolute;
    top: 494px;
    left: 892px;
    border-radius: var(--br-11xl);
    background-color: var(--red-0);
    width: 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xs) var(--padding-3xs);
    box-sizing: border-box;
    color: var(--red-300);
  }
  .div25 {
    position: absolute;
    top: 172px;
    left: 1048px;
    line-height: 140%;
    text-align: right;
  }
  .div26 {
    position: absolute;
    top: 254px;
    left: 1037px;
    line-height: 140%;
    text-align: right;
  }
  .div27 {
    position: absolute;
    top: 336px;
    left: 1037px;
    line-height: 140%;
    text-align: right;
  }
  .div28 {
    position: absolute;
    top: 418px;
    left: 1040px;
    line-height: 140%;
    text-align: right;
  }
  .div29 {
    position: absolute;
    top: 500px;
    left: 1037px;
    line-height: 140%;
    text-align: right;
  }
  .recentSalesChild {
    position: absolute;
    top: 141.5px;
    left: 35.5px;
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    width: 1043px;
    height: 1px;
  }
  .recentSalesItem {
    position: absolute;
    top: 223.5px;
    left: 35.5px;
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    width: 1043px;
    height: 1px;
  }
  .recentSalesInner {
    position: absolute;
    top: 305.5px;
    left: 35.5px;
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    width: 1043px;
    height: 1px;
  }
  .recentSalesChild1 {
    position: absolute;
    top: 387.5px;
    left: 35.5px;
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    width: 1043px;
    height: 1px;
  }
  .recentSalesChild2 {
    position: absolute;
    top: 469.5px;
    left: 35.5px;
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    width: 1043px;
    height: 1px;
  }
  .buttonBase {
    border-radius: var(--br-5xs);
    background-color: var(--white);
    box-shadow: var(--shadow-xs);
    border: 1px solid var(--grey-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-sm);
    gap: var(--gap-5xs);
  }
  .button {
    border-radius: var(--br-5xs);
    border: 1px solid var(--grey-200);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .content {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-5xs);
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xs);
    box-sizing: border-box;
  }
  .paginationNumberBase {
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--primary-0);
    width: 40px;
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
    color: var(--primary-500);
  }
  .paginationNumberBase1 {
    position: relative;
    border-radius: var(--br-5xs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .paginationNumbers {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xs);
    text-align: center;
    color: var(--grey-500);
  }
  .button1 {
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .pagination {
    position: absolute;
    top: calc(50% + 228.5px);
    left: calc(50% - 521px);
    border-top: 1px solid var(--grey-200);
    box-sizing: border-box;
    width: 1042px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xl) 0px 0px;
    font-size: var(--text-sm-medium-size);
  }
  .recentSales {
    position: absolute;
    top: 716px;
    left: 287px;
    border-radius: var(--br-base);
    background-color: var(--white);
    width: 1114px;
    height: 645px;
    overflow: hidden;
    font-size: var(--b1-medium-size);
    color: var(--grey-900);
  }
  .dashboard {
    position: relative;
    border-radius: 20px;
    background-color: var(--grey-100);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--text-sm-medium-size);
    color: var(--grey-400);
    font-family: var(--b1-medium);
  }
</style>
