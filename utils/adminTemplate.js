export const getAdminTemplate = (
  firstName,
  lastName,
  contactNumber,
  address,
  pinCode,
  orders,
  total
) => {
  return `<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Order Confirmation </title>
    <meta name="description" content="" />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />

    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

        a:hover {
            text-decoration: underline !important;
        }
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="
              @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
              font-family: 'Open Sans', sans-serif;
            ">



        <tr>
            <td>
                <table style="background-color: #f2f3f8; width : 100%; margin: 0 auto" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">

                    <tr>
                        <td>
                            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="
                        
                          background: #fff;
                          border-radius: 3px;
                          width: 100%;
                          -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                          -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                          box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                        ">
                                <tr>
                                    <td>
                                        <img style="width: 100%;" src="${
                                          process.env.DASHBOARD_BASE_URL
                                        }/assets/Header.png" alt="">
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height: 32px">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 35px">

                                        <table width="100%" style = "width : 100%;">
                                            <tr>
                                                   <td>
                                                <p style="
                                  font-family: 'sans-serif';
                                  font-style: normal;
                                  font-weight: 400;
                                  font-size: 16px;
                                  line-height: 24px;
                                  letter-spacing: -0.015em;
                                  color: #3D3D3D;
                                  ">Hi Ajinkya 👋</p>
                                  </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                <p style="
                                  margin-top: 12px;
                                  font-family: 'sans-serif';
                                  font-style: normal;
                                  font-size: 16px;
                                  font-weight: 400;
                                  letter-spacing: -0.015em;
                                  line-height: 24px;
                                  color: #3D3D3D;
                                  ">Its time to celebrate 🎉 <br />
                                                    A new order has been recieved.<br />
                                                    This e-mail contains  order details for your reference:</p>
                                           </td>
                                                </tr>

                                            <tr>
                                                <td style="
                                      display: flex;
                                      align-items: flex-start;
                                      padding: 24px;
                                      border-radius: 8px;
                                      border: 1px solid #E7E6E6;
                                      border-radius: 8px;
                                      flex-direction: column;
                                              ">
                                                    <table style="width: 100%; border: 0;table-layout:auto;"
                                                        cellspacing="0" cellpadding="0">
                                                        ${orders.map(
                                                          (order) => {
                                                            return `
                                                        <tr>
                                                            <td style="position: relative; width:fit-content;">
                                                                <div style="position: relative; width: fit-content;">
                                                                    <img style="width: 108px;  border-radius: 4px;" src="${
                                                                      process
                                                                        .env
                                                                        .DASHBOARD_BASE_URL
                                                                    }${order.image.slice(
                                                              1
                                                            )}" alt="">
                                                       

                                                         <td style="padding-left: 16px ;">
                                                         <p style="font-family: 'sans-serif';
                                                          font-style: normal;
                                                          font-weight: 700;
                                                          font-size: 18px;
                                                          line-height: 24px;
                                                          margin:0px;
                                                          letter-spacing: -0.01em;
                                                          color: #140A08;">${
                                                            order.name
                                                          }</p>
                                                                <p style="font-family: 'sans-serif';
                                                      font-style: normal;
                                                      font-weight: 500;
                                                      font-size: 16px;
                                                      line-height: 20px;
                                                      letter-spacing: -0.01em;
                                                      color: #726C6B;
                                                      margin: 4px 0 0 0;
                                                      ">${order.quantity}* ${
                                                              order.count
                                                            }</p>
                                                                <p style="font-family: 'sans-serif';
                                                      font-style: normal;
                                                      font-weight: 800;
                                                      font-size: 24px;
                                                      line-height: 28px;
                                                      letter-spacing: -0.015em;
                                                      margin: 16px 0 0 0;
                                                      color: #140A08;">₹ ${
                                                        order.price
                                                      }.00</p>
                                                            </td>
                                                        </tr>

                                                        <tr style="height: 24px ;"></tr>`;
                                                          }
                                                        )}



                                                        <tr style="background: #FAFAFA;
                                              border-radius: 4px;
                                              ">

                                                            <td style="padding: 16px;">
                                                                <p style="font-family: 'sans-serif';
                                                      font-style: normal;
                                                      font-weight: 500;
                                                      font-size: 18px;
                                                      line-height: 24px;
                                                      /* identical to box height, or 133% */
                                                      
                                                      letter-spacing: -0.01em;
                                                      
                                                      /* Neutrals/Neutral60 */
                                                      
                                                      color: #726C6B;
                                                      ">
                                                                    Total
                                                                </p>
                                                            </td>
                                                            <td style="display: flex; padding: 16px;">
                                                                <p style="margin-left: auto;font-family: 'sans-serif';
                                                      font-style: normal;
                                                      font-weight: 800;
                                                      font-size: 24px;
                                                      line-height: 28px;
                                                      letter-spacing: -0.015em;
                                                      color: #140A08;">₹ ${total}.00 </p>
                                                            </td>
                                                        </tr>
                                                    </table>


                                                </td>

                                            </tr>
                                               <tr>
                                            <td>

                                                <div style="margin-top: 24px;
                                    
                                  align-items: flex-start;
                                  padding: 24px;
                                  border-radius: 8px;
                                  border: 1px solid #E7E6E6;
                                  border-radius: 8px;
                                  ">
                                                    <p style="font-family: 'sans-serif';
                              margin: 0px;
                              font-style: normal;
                              font-weight: 400;
                              font-size: 16px;
                              line-height: 150%;
                              letter-spacing: -0.02em;
                              color: #3D3D3D;">Delivering to ${firstName} ${lastName}, ${address} ${pinCode} </p>

                                                    <p style="
                              font-family: 'sans-serif';
                              margin: 16px 0px 0px 0px;
                              font-style: normal;
                              font-weight: 400;
                              font-size: 16px;
                              line-height: 150%;
                              letter-spacing: -0.02em;
                              color: #3D3D3D;">Contact Number: ${contactNumber}</p>

                                            </td>
                                            </tr>


                                </tr>

                    

                            </table>



                        </td>
                    </tr>
                    <tr>
                    <td style="height: 32px">&nbsp;</td>
                    </tr>
         
                     <tr>
                                    <td style="background-color:#F4F9F4 ; ">
                                        <img style="width:100%!important;" src="${
                                          process.env.DASHBOARD_BASE_URL
                                        }/assets/Footer.png" alt="">
                           

                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="height: 20px">&nbsp;</td>
        </tr>
        <tr>
            <td style="text-align: center">
                <p style="
                          font-size: 14px;
                          color: rgba(69, 80, 86, 0.7411764705882353);
                          line-height: 18px;
                          margin: 0 0 0;
                        "></p>
            </td>
        </tr>
        <tr>
            <td style="height: 80px">&nbsp;</td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>`;
};
