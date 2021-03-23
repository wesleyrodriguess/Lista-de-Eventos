package com.eventoapp.eventoapp.repository;

import com.eventoapp.eventoapp.models.Evento;
import org.springframework.data.repository.CrudRepository;

public interface EventoRepository extends CrudRepository<Evento, String> {
}
