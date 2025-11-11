import KanbanBoard from '../components/KanbanBoard';
import KanbanColumn from '../components/KanbanColumn';
import OrderCard from '../components/OrderCard';
import { orders } from '../mock-data';

export default function Dashboard() {
  const newOrders = orders.filter(order => order.status === 'New');
  const inProgressOrders = orders.filter(order => order.status === 'In Progress');
  const readyOrders = orders.filter(order => order.status === 'Ready');

  return (
    <KanbanBoard>
      <KanbanColumn title="New Orders" count={newOrders.length}>
        {newOrders.map(order => <OrderCard key={order.id} order={order} />)}
      </KanbanColumn>
      <KanbanColumn title="In Progress" count={inProgressOrders.length}>
        {inProgressOrders.map(order => <OrderCard key={order.id} order={order} />)}
      </KanbanColumn>
      <KanbanColumn title="Ready" count={readyOrders.length}>
        {readyOrders.map(order => <OrderCard key={order.id} order={order} />)}
      </KanbanColumn>
    </KanbanBoard>
  )
}
