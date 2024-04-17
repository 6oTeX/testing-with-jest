// coinStyle.tsx

export default function CoinStyle(props: any) {
  return (
    <div key={props.coinId}>
      <div className="flex flex-row w-full p-1 ">
        <div className="w-1/5 ">
          <img className="w-10 h-10" src={props.imageUrl} alt="" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className=" text-base font-semibold">{props.symbol}</h1>
          </div>
          <div>
            <h1 className="text-xs text-stone-300">{props.name}</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-base font-semibold">${props.price}</h1>
      </div>
    </div>
  );
}

// export default function CoinStyle(props: any) {
//   return (
//     <div key={props.coinId}>
//       <div className="flex flex-row w-full p-1  ">
//         <div className="w-1/5 ">
//           <img className="w-10 h-10" src={props.imageUrl} alt="" />
//         </div>
//         <div className="flex flex-col">
//           <div>
//             <h1 className=" text-base font-semibold">{props.symbol}</h1>
//           </div>
//           <div>
//             <h1 className="text-xs text-stone-300">{props.name}</h1>
//           </div>
//         </div>
//       </div>
//       <div></div>
//       <div>
//         <h1 className="text-base font-semibold">${props.price}</h1>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// {
//   /* <div className="flex flex-row gap-1 align-middle">
//         <img
//           className="w-8 h-8"
//           src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013"
//           alt=""
//         />
//         <h1 className="text-1xl font-semibold">{props.symbol}</h1>
//       </div>
//       <div>
//         <h1 className="text-1xl font-semibold">{props.name}</h1>
//       </div>
//       <div className="w-1/4">${props.price}</div> */
// }
