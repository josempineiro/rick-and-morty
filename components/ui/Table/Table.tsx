import { Fragment } from "react";
import classNames from "classnames";

interface RowData {
  id: string;
}

interface TableProps {
  renderTableRow: Function;
  data: RowData[];
  className?: string;
  loading?: boolean;
  headers?: string[];
}

const Table = ({
  data,
  renderTableRow,
  className,
  loading,
  headers,
}: TableProps) => {
  return (
    <div className={classNames(["flex flex-col", className])}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {headers && (
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <Fragment key={row.id}>
                    {renderTableRow({ row, index })}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.displayName = "Table";

Table.propTypes = {};

export default Table;
