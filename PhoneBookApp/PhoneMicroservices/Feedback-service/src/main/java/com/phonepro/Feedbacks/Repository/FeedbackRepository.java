package com.phonepro.Feedbacks.Repository;

import com.phonepro.Feedbacks.Model.Feedbacks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedbacks, Long> {

}
