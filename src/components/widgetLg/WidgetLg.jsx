import "./widgetLg.css"


function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transcations</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt=""/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">23 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://media.istockphoto.com/photos/portrait-of-a-smiling-young-businessman-picture-id1297832726?b=1&k=20&m=1297832726&s=170667a&w=0&h=L4wrhC9DI1fCmtKs9z2O1tzuOpSuekY9os4zBBaQFJg=" alt=""/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">23 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt=""/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">23 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="https://media.istockphoto.com/photos/portrait-of-a-smiling-young-businessman-picture-id1297832726?b=1&k=20&m=1297832726&s=170667a&w=0&h=L4wrhC9DI1fCmtKs9z2O1tzuOpSuekY9os4zBBaQFJg=" alt=""/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">23 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
