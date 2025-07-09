import React from "react";
import {
  List,
  CellMeasurer,
  CellMeasurerCache,
  AutoSizer,
} from "react-virtualized";

const data = Array.from({ length: 1000 }, (_, i) =>
  `Item ${i + 1} - ${"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(
    Math.floor(Math.random() * 3) + 1
  )}`
);

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 60,
});

function VirtualizedList() {
  return (
    <div className="h-screen w-full p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Virtualized List with Dynamic Heights for 1000 Items
      </h1>
      <div className="h-[80vh] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowCount={data.length}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              rowRenderer={({ index, key, style, parent }) => (
                <CellMeasurer
                  key={key}
                  cache={cache}
                  columnIndex={0}
                  rowIndex={index}
                  parent={parent}
                >
                  <div
                    style={style}
                    className="px-4 py-3 border-b border-gray-100 text-gray-700 text-base hover:bg-gray-50 transition-colors"
                  >
                    {data[index]}
                  </div>
                </CellMeasurer>
              )}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default VirtualizedList;
